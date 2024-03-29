import { Interface } from 'readline'
import Disk from '../Disk.js'
import getAUserAllFileEntry from '../getUserAllFileEntry.js'
import File from '../models/File.js'
import FileEntry from '../models/FileEntry.js'
import updateOneLine from '../updateOneLine.js'

export default async function read(
    username: string,
    fileName: string,
    content: string
) {
    const disk: Disk = Disk.getDisk()

    const allFileEntry: FileEntry[] = await getAUserAllFileEntry(username)
    let targetContent: FileEntry = null
    for (const fileEntry of allFileEntry) {
        if (fileEntry.fileName === fileName) {
            targetContent = fileEntry
        }
    }
    targetContent.fileName = null

    const targetAddress = await new Promise<number>((
        resolve: (targetAddress: number) => void,
        _: (error: Error) => void
    ) => {
        let result: number = 0

        const readline: Interface = disk.createReadlineInterface()

        let currentAddress: number = 0
        readline
            .on('line', (line: string) => {
                if (line) {
                    const data = JSON.parse(line)

                    if (
                        data.fileName === fileName &&
                        data.nextUFDAddress === targetContent.nextUFDAddress
                    ) {
                        result = data.fileAddress
                        readline.close()
                    }
                }
                currentAddress++
            })
            .on('close', () => resolve(result))
    })


    const file: File = new File(content)
    await updateOneLine(targetAddress, JSON.stringify(file))

    console.log('write order over.')
}
