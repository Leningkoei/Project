; 3.29  假设数据段定义如下:
;       coname    db  'space explorers inc'
;       prline    db  20 dup(' ')
;       (5) 检查coname字符串中有无空格字符, 如有则把它传送给bh寄存器

datas segment
    coname  db  'space explorers inc'
    prline  db  20 dup(' ')
datas ends

codes segment
    assume  cs: codes, ds: datas
start:
    mov     ax, datas
    mov     ds, ax

    mov     es, ax

    lea     di, coname              ; 将coname的偏移地址赋值给di
    mov     al, 20h
    cld
    mov     cx, 20
    repnz   scasb

    jz      found
    jmp     exit
found:
    sub     cx, 20
    not     cx
    mov     di, cx
    mov     bh, byte ptr ds: [di]   ; byte ptr: 将后面的16位word类型转换为8位byte类型; ds: [di]:跨段寻址
exit:
    mov     ah, 4ch
    int     21h
codes ends

end start
