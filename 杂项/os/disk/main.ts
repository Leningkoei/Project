import readline from 'readline'
import dir from './orders/dir.js'
import Disk from './Disk.js'
import mkdir from './orders/mkdir.js'
import read from './orders/read.js'
import rm from './orders/rm.js'
import rmdir from './orders/rmdir.js'
import write from './orders/write.js'
import create from './orders/create.js'
import copy from './orders/copy.js'
import cut from './orders/cut.js'

async function main() {
    await Disk.initDisk()
    const disk: Disk = Disk.getDisk()

    const rl: readline.Interface = readline.createInterface({
        input: process.stdin
    })

    rl.on('line', async (line: string) => {
        const words: string[] = line.split(' ')

        switch(words[0]) {
            case 'dir':
                await dir(words[1])
                break
            case 'mkdir':
                await mkdir(words[1])
                break
            case 'rmdir':
                await rmdir(words[1])
                break
            case 'create':
                await create(words[1], words[2], words[3])
                break
            case 'rm':
                await rm(words[1], words[2])
                break
            case 'read':
                await read(words[1], words[2])
                break
            case 'write':
                await write(words[1], words[2], words[3])
                break
            case 'copy':
                await copy(words[1], words[2], words[3], words[4])
                break
            case 'cut':
                await cut(words[1], words[2], words[3], words[4])
                break
            default:
                console.log('Inv input')
                break
        }

        // await disk.clearCache()
    })
}

main()
