import create from './create.js'
import read from './read.js'

export default async function copy(
    username: string,
    fileName: string,
    targetUsername: string,
    targetFileName: string
) {
    if (username === targetUsername && fileName === targetFileName) {
        throw new Error('FileName is same!')
    }
    await create(targetUsername,
        targetFileName,
        await read(username, fileName)
    )
    console.log('Copy order over.')
}
