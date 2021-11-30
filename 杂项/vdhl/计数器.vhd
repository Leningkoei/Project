--  计数时钟周期

-- 4bit

library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity Cnt4 is
    port (
        clk: in bit;
        q: out std_logic_vector(3 downto 0);
    );
end entity Cnt4;

architecture bhv of Cnt4 is
    signal q1: std_logic_vector(3 downto 0);
begin
    process (clk)
    begin
        if clk'event and clk = '1' then
            q1 <= q1 + 1;
        end if;
    end process;
    q <= q1;
end architecture bhv;

-- 10进制

library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity Cnt10 is
    port (
        clk: in bit;
        q: out std_logic_vector(3 downto 0);
    );
end entity Cnt10;

architecture bhv of Cnt10 is
    signal q1: std_logic_vector(3 downto 0); begin
    process (clk) begin
        if clk'event and clk = '1' then
            if q1 < 9 then
                q1 <= q1 + 1;
            else
                q1 <= (others => '0');
            end if;
        end if;
    end process;
    q <= q1;
end architecture bhv;

-- 加减可控, md == 0为加, md == 1为减

library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity Cnt10Md is
    port (
        clk: in std_logic;
        md: in std_logic;
        q: out std_logic;
    );
end entity Cnt10Md;

architecture bhv of Cnt10Md is
    signal q1: std_logic; begin
    process (clk, md) begin
        if clk'event and clk = '1' then
            if md = '0' then
                if q1 < 9 then
                    q1 <= q1 + 1;
                else
                    q1 <= (others => '0');
                end if;
            elsif md = '1' then
                if q1 > 0 then
                    q1 <= q1 - 1;
                else
                    q1 <= '1001';
                end if;
            end if;
        end if;
    end process;
    q <= q1;
end architecture bhv;
