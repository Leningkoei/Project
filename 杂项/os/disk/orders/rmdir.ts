import { Interface } from 'readline'
import Disk from '../Disk.js'
import updateOneLine from '../updateOneLine.js'

export default async function rmdir(username: string) {
    let targetAddress = 0
    let targetContent = null

    await new Promise<void>((
        resolve: (address: void) => void,
        _: (error: Error) => void
    ) => {
        const disk: Disk = Disk.getDisk()
        const readline: Interface = disk.createReadlineInterface()

        let currentAddress: number = 0
        readline
            .on('line', (line: string) => {
                if (line) {
                    const data = JSON.parse(line)

                    if (data.username === username) {
                        targetAddress = currentAddress
                        targetContent = data
                        readline.close()
                    }
                }

                currentAddress++
            })
            .on('close', () => resolve())
    })

    targetContent.username = null
    await updateOneLine(targetAddress, JSON.stringify(targetContent))

    console.log('Rmdir order over.')
}
