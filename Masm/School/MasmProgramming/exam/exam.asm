; 从键盘接收一个4位的16进制数, 并在终端上显示与它等值的二进制数

assume cs: codes

codes segment
start:
    getI:
        mov     ah, 1
        int     21h
    turnI:
        sub     al, 00110000b
        jl      exit                ; if (al) < 0: jmp -> exit
        cmp     al, 10              ; if (al) >= 10: jmp -> turnlitterI; else: jmp -> continueI
        jnb     turnlitterI
        jmp     continueI
        turnlitterI:
            sub     al, 00001000b
            add     al, 00000001b
            cmp     al, 10          ; if (al) < 10: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) < F + 1: jmp -> continueI
            jb      continueI
            sub     al, 00100000b
            cmp     al, 10          ; if (al) < A: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) >= F + 1: jmp -> exit
            jnb     exit
        continueI:
            mov     bl, al
            mov     cl, 4
            rol     bl, cl
    getII:
        mov     ah, 1
        int     21h
    turnII:
        sub     al, 00110000b
        jl      exit                ; if (al) < 0: jmp -> exit
        cmp     al, 10              ; if (al) >= 10: jmp -> turnlitterII; else: jmp -> continueII
        jnb     turnlitterII
        jmp     continueII
        turnlitterII:
            sub     al, 00001000b
            add     al, 00000001b
            cmp     al, 00001010b   ; if (al) < A: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) < F + 1: jmp -> continueII
            jb      continueII
            sub     al, 00100000b
            cmp     al, 00001010b   ; if (al) < A: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) >= F + 1: jmp -> exit
            jnb     exit
        continueII:
            add     bl, al
    mov     bh, bl
    getIII:
        mov     ah, 1
        int     21h
    turnIII:
        sub     al, 00110000b
        jl      exit                ; if (al) < 0: jmp -> exit
        cmp     al, 10              ; if (al) >= 10: jmp -> turnlitterIII; else: jmp -> continueIII
        jnb     turnlitterIII
        jmp     continueIII
        turnlitterIII:
            sub     al, 00001000b
            add     al, 00000001b
            cmp     al, 00001010b   ; if (al) < A: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) < F + 1: jmp -> continueIII
            jb      continueIII
            sub     al, 00100000b
            cmp     al, 00001010b   ; if (al) < A: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) >= F + 1: jmp -> exit
            jnb     exit
        continueIII:
            mov     bl, al
            mov     cl, 4
            rol     bl, cl
    getIV:
        mov     ah, 1
        int     21h
    turnIV:
        sub     al, 00110000b
        jl      exit                ; if (al) < 0: jmp -> exit
        cmp     al, 10              ; if (al) >= 10: jmp -> turnlitterIV; else: jmp -> continueIV
        jnb     turnlitterIV
        jmp     continueIV
        turnlitterIV:
            sub     al, 00001000b
            add     al, 00000001b
            cmp     al, 00001010b   ; if (al) < A: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) < F + 1: jmp -> continueIV
            jb      continueIV
            sub     al, 00100000b
            cmp     al, 00001010b   ; if (al) < A: jmp -> exit
            jb      exit
            cmp     al, 00010000b   ; if (al) >= F + 1: jmp -> exit
            jnb     exit
        continueIV:
            add     bl, al
    print:
        printspace:
            mov     dl, 32
            mov     ah, 2
            int     21h
        printFlagofHex:
            mov     dl, 72
            mov     ah, 2
            int     21h
        printI2VIII:
            mov     dl, 10
            mov     ah, 2
            int     21h
            I:
                test    bh, 10000000b
                jz      print0I
                print1I:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     II
                print0I:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            II:
                test    bh, 01000000b
                jz      print0II
                print1II:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     III
                print0II:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            III:
                test    bh, 00100000b
                jz      print0III
                print1III:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     IV
                print0III:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            IV:
                test    bh, 00010000b
                jz      print0IV
                print1IV:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     printspaceI
                print0IV:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
        printspaceI:
            mov     dl, 32
            mov     ah, 2
            int     21h
            V:
                test    bh, 00001000b
                jz      print0V
                print1V:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     VI
                print0V:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            VI:
                test    bh, 00000100b
                jz      print0VI
                print1VI:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     VII
                print0VI:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            VII:
                test    bh, 00000010b
                jz      print0VII
                print1VII:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     VIII
                print0VII:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            VIII:
                test    bh, 00000001b
                jz      print0VIII
                print1VIII:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     printspaceII
                print0VIII:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
        printspaceII:
            mov     dl, 32
            mov     ah, 2
            int     21h
        printIX2XVI:
            IX:
                test    bl, 10000000b
                jz      print0IX
                print1IX:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     X
                print0IX:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            X:
                test    bl, 01000000b
                jz      print0X
                print1X:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     XI
                print0X:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            XI:
                test    bl, 00100000b
                jz      print0XI
                print1XI:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     XII
                print0XI:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            XII:
                test    bl, 00010000b
                jz      print0XII
                print1XII:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     printspaceIII
                print0XII:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
        printspaceIII:
            mov     dl, 32
            mov     ah, 2
            int     21h
            XIII:
                test    bl, 00001000b
                jz      print0XIII
                print1XIII:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     XIV
                print0XIII:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            XIV:
                test    bl, 00000100b
                jz      print0XIV
                print1XIV:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     XV
                print0XIV:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            XV:
                test    bl, 00000010b
                jz      print0XV
                print1XV:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     XVI
                print0XV:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
            XVI:
                test    bl, 00000001b
                jz      print0XVI
                print1XVI:
                    mov     dl, 49
                    mov     ah, 2
                    int     21h
                    jmp     printspaceIV
                print0XVI:
                    mov     dl, 48
                    mov     ah, 2
                    int     21h
        printspaceIV:
            mov     dl, 32
            mov     ah, 2
            int     21h
        printFlagofBin:
            mov     dl, 66
            mov     ah, 2
            int     21h
    exit:
        mov     ah, 4ch
        int     21h
codes ends
end start