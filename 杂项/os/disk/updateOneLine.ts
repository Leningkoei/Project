import fs, { ReadStream, WriteStream } from 'fs'
import readline from 'readline'

export default async function updateOneLine(lineIndex: number, changedValue: string) {
    await fileToCache(lineIndex, changedValue)
    await cacheToFile()
}

function fileToCache(lineIndex: number, changedValue: string): Promise<void> {
    return new Promise<void>((
        resolve: () => void,
        _: (error: Error) => void
    ) => {
        const readStream: ReadStream =
            fs.createReadStream('./data/disk.txt')
        const writeStream: WriteStream =
            fs.createWriteStream('./data/cache.txt')
        const readLine: readline.Interface = readline.createInterface({
            input: readStream
        })

        let currentLineIndex: number = 0
        readLine.on('line', (line: string) => {
            if (currentLineIndex++ === lineIndex) {
                writeStream.write(changedValue + '\n')
            } else {
                writeStream.write(line + '\n')
            }
        })

        readLine.on('close', () => resolve())
    })
}
function cacheToFile(): Promise<void> {
    return new Promise<void>((
        resolve: () => void,
        reject: (error: Error) => void
    ) => {
        const readStream: ReadStream =
            fs.createReadStream('./data/cache.txt')
        const writeStream: WriteStream =
            fs.createWriteStream('./data/disk.txt')

        readStream
            .pipe(writeStream)
            .on('close', () => resolve())
            .on('error', () => reject(new Error('cache to file is fail')))

    })
}
