import fs from 'fs'
import readline from 'readline'
import getLineCount from './getLineCount.js'

export default class Disk {
    private constructor(lineCount: number) {
        this.lineCount = lineCount
        // this.updateOneLine = updateOneLine
    }

    public static async initDisk() {
        const lineCount: number = await getLineCount()
        Disk.disk = new Disk(lineCount)
    }
    public static getDisk() {
        if (Disk.disk) {
            return Disk.disk
        } else {
            throw new Error('Disk must be init!')
        }
    }

    private static disk: Disk = null

    private lineCount: number = null

    public addLineCount() {
        this.lineCount++
    }
    public clearCache(): Promise<void> {
        return new Promise<void>((
            resolve: () => void,
            _: (error: Error) => void
        ) => {
            fs.rm('./data/cache.txt', () => {
                resolve()
            })
        })
    }
    public createReadlineInterface(): readline.Interface {
        return readline.createInterface({
            input: fs.createReadStream('./data/disk.txt')
        })
    }
    public getLineCount(): number {
        return this.lineCount
    }
}
