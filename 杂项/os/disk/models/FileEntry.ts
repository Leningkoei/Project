
export default class FileEntry {
    constructor(
        fileName: string,
        filePath: string,
        nextUFDAddress: number,
        fileAddress: number
    ) {
        this.fileName = fileName
        this.filePath = filePath
        this.nextUFDAddress = nextUFDAddress
        this.fileAddress = fileAddress
    }

    public fileName: string = null          // 文件名
    public filePath: string = null          // 逻辑位置
    public nextUFDAddress: number = null    // 链接到下1项UFD的物理位置
    public fileAddress: number = null       // 链接到文件的物理位置
}
