; 从键盘接收一个4位的16进制数, 并在终端上显示与它等值的二进制数

assume cs: code, ss: stack

stack segment
db      200  dup(0)
stack ends

code segment
start:
    mov     cx, 2
    go:
        push    cx
        mov     cx, 2
        get:
            push    cx
            mov     ah, 1
            int     21h
        turn:
            sub     al, 00110000b
            jl      exit                ; if (al) < 0: jmp -> exit
            cmp     al, 10              ; if (al) >= 10: jmp -> turnlitter; else: jmp -> continue
            jnb     turnlitter
            jmp     chooseOT
            turnlitter:
                sub     al, 00001000b
                add     al, 00000001b
                cmp     al, 10          ; if (al) < 10: jmp -> exit
                jb      exit
                cmp     al, 00010000b   ; if (al) < F + 1: jmp -> continue
                jb      chooseOT
                sub     al, 00100000b
                cmp     al, 10          ; if (al) < A: jmp -> exit
                jb      exit
                cmp     al, 00010000b   ; if (al) >= F + 1: jmp -> exit
                jnb     exit
            chooseOT:
                pop     cx
                cmp     cx, 2
                jb      continueII
            continueI:
                push    cx
                mov     bl, al
                mov     cl, 4
                rol     bl, cl
                jmp     breakI
            continueII:
                push    cx
                add     bl, al
            breakI:
                pop     cx
                loop    get
        choose:
            pop     cx
            cmp     cx, 2
            jb      break
            mov     bh, bl
        break:
            loop    go
    print:
        printspace:
            mov     dl, 32
            mov     ah, 2
            int     21h
        printFlagofHex:
            mov     dl, 72
            mov     ah, 2
            int     21h
        printenter:
            mov     dl, 10
            mov     ah, 2
            int     21h
        mov     cx, 4
        printnumstart:
            push    cx
            mov     cx, 4
            printnum:
                test    bx, 1000000000000000b
                jz      print0
                print1:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     continue
                print0:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
                continue:
                rol     bx, 1
                loop    printnum
            printspacea:
                mov     dl, 32
                mov     ah, 2
                int     21h
            pop     cx
            loop    printnumstart
        printFlagofBin:
            mov     dl, 66
            mov     ah, 2
            int     21h
    exit:
        mov     ah, 4ch
        int     21h
code ends
end start