import Disk from '../Disk.js'

export default function dir(path: string): Promise<void> {
    return new Promise<void>((
        resolve: () => void,
        _: (error: Error) => void
    ) => {
        const disk: Disk = Disk.getDisk()

        disk
            .createReadlineInterface()
            .on('line', (line: string) => {
                if (line) {
                    const data = JSON.parse(line)

                    if (data.fileName && data.filePath === path) {
                        console.log(data.fileName)
                    }
                }
            })
            .on('close', () => {
                console.log('Dir order over.')
                resolve()
            })
    })
}
