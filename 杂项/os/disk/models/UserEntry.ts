export default class UserEntry {
    constructor(username: string, ufdAddress: number, nextMFDAddress: number) {
        this.username = username
        this.ufdAddress = ufdAddress
        this.nextMFDAddress = nextMFDAddress
    }

    public username: string = null          // 用户名
    public ufdAddress: number = null        // 链接到UFD的物理位置
    public nextMFDAddress: number = null    // 链接到下1项MFD的物理位置
}
