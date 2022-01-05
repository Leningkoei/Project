import readline from 'readline'
import Disk from '../Disk.js'
import getOneLineContent from '../getOneLineContent.js'
import UserEntry from '../models/UserEntry.js'
import updateOneLine from '../updateOneLine.js'

export default async function mkdir(username: string) {
    const disk: Disk = Disk.getDisk()

    // 修改最后1个nextMFDAddress为null的MFD为diskLineCount

    const lastMFDAddress: number = await getLastMFDAddress()
    const lastMFDContent: string = await getOneLineContent(lastMFDAddress)
    const data = JSON.parse(lastMFDContent)
    data.nextMFDAddress = disk.getLineCount()
    const changedValue = JSON.stringify(data)
    await updateOneLine(lastMFDAddress, changedValue)

    // 修改diskLineCount那行为新的MFD片段

    const userEntry: UserEntry = new UserEntry(username, null, null)
    await updateOneLine(disk.getLineCount(), JSON.stringify(userEntry) + '\n')

    // 将diskLineCount + 1
    disk.addLineCount()

    console.log('Mkdir order over.')
}

function getLastMFDAddress(): Promise<number> {
    return new Promise<number>((
        resolve: (lastMFDAddress: number) => void,
        _: (error: Error) => void
    ) => {
        const disk: Disk = Disk.getDisk()

        let currentAddress: number = 0

        const readLine: readline.Interface = disk.createReadlineInterface()
        readLine
            .on('line', (line: string) => {
                if (line) {
                    const data = JSON.parse(line)

                    if (data.nextMFDAddress === null) {
                        readLine.close()
                    }
                }
                currentAddress++
            })
            .on('close', () => resolve(currentAddress))

    })
}
