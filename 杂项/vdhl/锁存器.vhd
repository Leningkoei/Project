-- 仅当时钟信号为1时, q = d

-- 普通

library ieee;
use ieee.std_logic_1164.all;

entity Ltch2 is
    port (
        clk: in std_logic;
        d: in std_logic;
        q: out std_logic;
    );
end entity Ltch2;

architecture bhv of Ltch2 is
    signal q1: std_logic;
begin
    process (clk, d)
        if clk = '1' then
            q1 <= d;
        end if;
    end process;
    q <= q1;
end architecture bhv;

-- 清零

library ieee;
use ieee.std_logic_1164.all;

entity Ltch3 is
    port (
        clk: in std_logic;
        rst: in std_logic;
        d: in std_logic;
        q: out std_logic;
    );
end entity Ltch3;

architecture bhv of Ltch3 is
    signal q1: std_logic
begin
    process (clk, rst, d)
        if rst = '1' then
            q1 <= 0;
        elsif clk = '1' then
            q1 <= d;
        end if;
    end process;
    q <= q1;
end architecture bhv;
