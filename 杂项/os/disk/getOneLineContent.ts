import readline from 'readline'
import Disk from './Disk.js'

export default async function getOneLineContent(
    address: number
): Promise<string> {
    return new Promise<string>((
        resolve: (content: string) => void,
        reject: (error: Error) => void
    ) => {
        let result: string = null

        const disk: Disk = Disk.getDisk()
        const readLine: readline.Interface = disk.createReadlineInterface()

        readLine
            .on('line', (line) => {
                if (!address--) {
                    result = line
                    readLine.close()
                }
            })
            .on('close', () => {
                if (result === null) {
                    reject(new Error('This line is undefined!'))
                } else {
                    resolve(result)
                }
            })
    })
}
