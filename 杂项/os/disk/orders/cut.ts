import copy from './copy.js'
import rm from './rm.js'

export default async function cut(
    username: string,
    fileName: string,
    targetUsername: string,
    targetFileName: string
) {
    await copy(username, fileName, targetUsername, targetFileName)
    await rm(username, fileName)
    console.log('Cut order over.')
}
