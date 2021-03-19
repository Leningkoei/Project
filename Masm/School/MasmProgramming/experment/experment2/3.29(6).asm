; 3.29  假设数据段定义如下:
;       coname    db  'space explorers inc'
;       prline    db  20 dup(' ')
;       (6) 把coname中的字符串逆序传送到prline, 即prline中存的是'cni srerolpxe ecaps'

datas segment
    coname  db  'space explorers inc'
    prline  db  20 dup(' ')
datas ends

codes segment
    assume  cs: codes, ds: datas
start:
    mov     ax, datas
    mov     ds, ax

    mov     cx, 4
    lea     si, coname + 19
    lea     di, prline
again:
    mov     ax, [si]
    mov     [di], ax
    dec     si
    inc     di
    loop    again
    
    mov     ah, 4ch
    int     21h
codes ends

end start
