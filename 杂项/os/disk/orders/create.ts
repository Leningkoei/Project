import { Interface } from 'readline'
import Disk from '../Disk.js'
import getOneLineContent from '../getOneLineContent.js'
import getAUserAllFileEntry from '../getUserAllFileEntry.js'
import File from '../models/File.js'
import FileEntry from '../models/FileEntry.js'
import updateOneLine from '../updateOneLine.js'

export default async function create(
    username: string,
    fileName: string,
    content: string
) {
    const disk: Disk = Disk.getDisk()

    // 找到特定username的最后1个UFD碎片

    const allFileEntry: FileEntry[] = await getAUserAllFileEntry(username)

    let lastUDFFileName: string = null
    for (const fileEntry of allFileEntry) {
        if (fileEntry.nextUFDAddress === null) {
            lastUDFFileName = fileEntry.fileName
        }
    }

    const lastUFDAddress: number = await getLastUFDAddress(lastUDFFileName)
    const lastUFDContent: FileEntry =
        JSON.parse(await getOneLineContent(lastUFDAddress))

    // 更改那个碎片的nextUFDAddress为最后1行

    lastUFDContent.nextUFDAddress = disk.getLineCount()
    await updateOneLine(lastUFDAddress, JSON.stringify(lastUFDContent))

    // 在最后1行添加新的UFD碎片, 并将fileAddress指向最后1行 + 1

    const fileEntry: FileEntry = new FileEntry(
        fileName,
        `/users/${username}`,
        null,
        disk.getLineCount() + 1
    )
    await updateOneLine(disk.getLineCount(), JSON.stringify(fileEntry) + '\n')
    disk.addLineCount()

    // 在最后1行添加新的file

    const file: File = new File(content)
    await updateOneLine(disk.getLineCount(), JSON.stringify(file) + '\n')
    disk.addLineCount()

    console.log('Create order over.')
}

function getLastUFDAddress(fileName: string): Promise<number> {
    return new Promise<number>((
        resolve: (lastUFDAddress: number) => void,
        _: (error: Error) => void
    ) => {
        const disk: Disk = Disk.getDisk()

        let currentAddress: number = 0

        const readLine: Interface = disk.createReadlineInterface()
        readLine
            .on('line', (line: string) => {
                if (line) {
                    const data = JSON.parse(line)

                    if (
                        data.fileName === fileName &&
                        data.nextUFDAddress === null
                    ) {
                        readLine.close()
                    }
                }
                currentAddress++
            })
            .on('close', () => resolve(currentAddress))

    })
}
