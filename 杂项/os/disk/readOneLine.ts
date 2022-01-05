import { Interface } from 'readline'
import Disk from './Disk.js'

export default function readOneLine(targetAddress: number): Promise<string> {
    return new Promise<string>((
        resolve: (content: string) => void,
        _: (error: Error) => void
    ) => {
        let result: string = null

        const disk: Disk = Disk.getDisk()

        const readline: Interface = disk.createReadlineInterface()

        let count: number = 0
        readline
            .on('line', (line: string) => {
                if (count++ === targetAddress) {
                    console.log(JSON.parse(line).content)
                    result = JSON.parse(line).content
                    readline.close()
                }
            })
            .on('close', () => resolve(result))
    })
}
