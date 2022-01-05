import fs from 'fs'
import readline from 'readline'

export default async function main() {
    return await getLineCount()
}

function getLineCount(): Promise<number> {
    return new Promise<number>((
        resolve: (lineCount: number) => void,
        _: (error: Error) => void
    ) => {
        let count: number = 0
        readline
            .createInterface({
                input: fs.createReadStream('./data/disk.txt')
            })
            .on('line', (_: string) => {
                count++
            })
            .on('close', () => resolve(count - 1))
    })
}
