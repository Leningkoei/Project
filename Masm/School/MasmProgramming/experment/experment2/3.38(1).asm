title   exloop.com

codes segment
    assume  cs: codes, ds: codes, ss: codes
    org     100h
start:
    mov     ax, 01
    mov     bx, 02
    mov     dx, 03
    mov     cx, 04
l20:
    inc     ax
    add     bx, ax
    shr     dx, 1
    loop    20      ;(1)
    ret
codes ends

end start
