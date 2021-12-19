--  MOORE 型序列检测器的状态机设计
--  检测输入的2进制序列中含有 "1101"

library IEEE;
use IEEE.std_logic_1164.all;

entity AName is port (
    din, clk, rst: in std_logic;
    sout: out std_logic;
);
end entity AName;

architecture bhv of AName is
    type state is (S0, S1, S2, S3, S4);
    signal st, nst: state := S0; begin
    com: process(st, din) begin
        case st is
            when S0 =>
                if din = '1' then nst <= S1;
                else nst <= S0;
                end if;
            when S1 =>
                if din = '1' then nst <= S2;
                else nst <= S0;
                end if;
            when S2 =>
                if din = '0' then nst <= S3;
                else nst <= S0;
                end if;
            when S3 =>
                if din = '1' then nst <= S4;
                else nst <= S0;
                end if;
            when S4 =>
                if din = '0' then nst <= S0;
                else nst <= S2;
                end if;
            when others => nst <= S0;
        end case;
    end process com;
    reg: process(clk, nst, rst) begin
        if rst = '1' then st <= S0;
        elsif clk'event and clk = '1' then st <= nst;
        end if;
    end process reg;
    sout <= '1' when st = S4 else '0';
end architecture bhv;
