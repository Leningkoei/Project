import { Interface } from 'readline'
import Disk from './Disk.js'
import FileEntry from './models/FileEntry.js'
import UserEntry from './models/UserEntry.js'

export default async function getAUserAllFileEntry(
    username: string
): Promise<FileEntry[]> {
    const userEntry: UserEntry = await getUserEntry(username)
    if (!userEntry) {
        throw new Error('User is undefined!')
    }
    const allFileEntry: FileEntry[] =
        await getAllFileEntryByUserEntry(userEntry)

    return allFileEntry
}

function getUserEntry(username: string): Promise<UserEntry> {
    return new Promise<UserEntry>((
        resolve: (address: UserEntry) => void,
        _: (error: Error) => void
    ) => {
        let result: UserEntry = null

        const disk: Disk = Disk.getDisk()
        const readline: Interface = disk.createReadlineInterface()

        readline
            .on('line', (line: string) => {
                if (line) {
                    const data: UserEntry = JSON.parse(line)

                    if (data.username === username) {
                        result = data
                        readline.close()
                    }
                }
            })
            .on('close', () => resolve(result)
            )
    })
}
function getAllFileEntryByUserEntry(
    userEntry: UserEntry
): Promise<FileEntry[]> {
    return new Promise<FileEntry[]>((
        resolve: (fileEntries: FileEntry[]) => void,
        _: (error: Error) => void
    ) => {
        const result: FileEntry[] = []

        const disk: Disk = Disk.getDisk()
        const readline: Interface = disk.createReadlineInterface()

        let nextFileEntryAddress: number = userEntry.ufdAddress
        let currentAddress: number = 0
        readline
            .on('line', (line: string) => {
                if (currentAddress++ === nextFileEntryAddress) {
                    const data: FileEntry = JSON.parse(line)

                    result.push(data)
                    if (data.nextUFDAddress === null) {
                        readline.close()
                    } else {
                        nextFileEntryAddress = data.nextUFDAddress
                    }
                }
            })
            .on('close', () => resolve(result))
    })
}
