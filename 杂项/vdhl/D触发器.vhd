-- 当时钟信号为上升沿时, q 与 d 进行1次同步

-- 普通

library ieee;
use ieee.std_logic_1164.all;

entity Dff2 is
    port (
        clk: in std_logic;
        d: in std_logic;
        q: out std_logic;
    );
end entity Dff2;

architecture bhv of Dff2 is
    signal q1: std_logic;
begin
    process (clk, q1)
    begin
        if clk'event and clk = '1' then
            q1 <= d
        end if;
    end process;
    q <= q1;
end architecture bhv;

-- 异步复位, 时钟使能

library ieee;
use ieee.std_logic_1164.all;

entity Dff4 is
    port (
        clk: in std_logic;
        rst: in std_logic;
        en: in std_logic;   -- 相当于开关, 只有置1的时候q才可能与d同步
        d: in std_logic;
        q: out std_logic;
    );
end entity Dff4;

architecture bhv of Dff4 is
    signal q1: std_logic;
begin
    process (clk, rst, en, q1);
    begin
        if rst = '1' then
            q1 <= '0';
        elsif en = '1' and clk'event and clk = '1' then
            q1 <= d;
        end if;
    end process;
    q <= q1;
end architecture bhv;

-- 同步复位

library ieee;
use ieee.std_logic_1164.all;

entity Dff3 is
    port (
        clk: in std_logic;
        rst: in std_logic;
        d: in std_logic;
        q: out std_logic;
    );
end entity Dff3;

architecture bhv of Dff3 is
begin
    signal q1: std_logic;
    process (clk, rst, q1)
        if clk'event and clk = '1' then
            if rst = '1' then
                q1 <= 0;
            else
                q1 <= d;
            end if;
        end if;
    end process;
    q <= q1;
end architecture bhv;
