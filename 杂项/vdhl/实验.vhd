--  LED显示

library IEEE;
use IEEE.std_logic_1164.all;

entity AName is port (
    A0: in std_logic;
    Y0: out std_logic;
);
end entity AName;

architecture bhv of AName is begin
    process (A0) begin
        if A0 === '0' then
            Y0 <= '1';
        else
            Y0 <= '0';
        end if;
    end process;
end architecture bhv;

--  译码器设计

library IEEE;
use IEEE.std_logic_1164.all;

entity AName is port (
    A2, A1, A0: in std_logic;
    Y7, Y6, Y5, Y4, Y3, Y2, Y1, Y0: out std_logic;
);
end entity AName;

architecture bhv of AName is
    signal A: std_logic_vector(2 downto 0); begin
    process (A0, A1, A2) begin
        A <= A2 & A1 & A0;
        case A is
            when '000' =>
                Y7 <= '0'; Y6 <= '1'; Y5 <= '1'; Y4 <= '1';
                Y3 <= '1'; Y2 <= '1'; Y1 <= '1'; Y0 <= '1';
            when '001' =>
                Y7 <= '1'; Y6 <= '0'; Y5 <= '1'; Y4 <= '1';
                Y3 <= '1'; Y2 <= '1'; Y1 <= '1'; Y0 <= '1';
            when '010' =>
                Y7 <= '1'; Y6 <= '1'; Y5 <= '0'; Y4 <= '1';
                Y3 <= '1'; Y2 <= '1'; Y1 <= '1'; Y0 <= '1';
            when '011' =>
                Y7 <= '1'; Y6 <= '1'; Y5 <= '1'; Y4 <= '0';
                Y3 <= '1'; Y2 <= '1'; Y1 <= '1'; Y0 <= '1';
            when '100' =>
                Y7 <= '1'; Y6 <= '1'; Y5 <= '1'; Y4 <= '1';
                Y3 <= '0'; Y2 <= '1'; Y1 <= '1'; Y0 <= '1';
            when '101' =>
                Y7 <= '1'; Y6 <= '1'; Y5 <= '1'; Y4 <= '1';
                Y3 <= '1'; Y2 <= '0'; Y1 <= '1'; Y0 <= '1';
            when '110' =>
                Y7 <= '1'; Y6 <= '1'; Y5 <= '1'; Y4 <= '1';
                Y3 <= '1'; Y2 <= '1'; Y1 <= '0'; Y0 <= '1';
            when '111' =>
                Y7 <= '1'; Y6 <= '1'; Y5 <= '1'; Y4 <= '1';
                Y3 <= '1'; Y2 <= '1'; Y1 <= '1'; Y0 <= '0';
            when others =>
                Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
        end case;
    end process;
end architecture bhv;

--  分频器, 计数器设计

--  (1)

library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.std_logic_unsigned.all;

entity AName is port (
    clk: in std_logic;
    Y0: out std_logic;
);
end entity AName;

architecture hhb of AName is
    signal R: std_logic_vector(25 downto 0); begin
    process (clk) begin
        if clk'event and clk = '1' then
            if R < 39999999 then
                R <= R + 1;
            else
                R <= 0;
                Y0 <= '1';
            end if;
        end if;
    end process;
end architecture hhb;

--  (2)

library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.std_logic_unsigned.all;

entity AName is port (
    clk: in std_logic;
    Y7, Y6, Y5, Y4, Y3, Y2, Y1, Y0: out std_logic;
);
end entity AName;

architecture bhv of AName is
    signal R: std_logic_vector(25 downto 0);
    signal S: std_logic_vector(2 downto 0); begin
    process (clk) begin
        if clk'event and clk = '1' then
            if R < 39999999 then
                R <= R + 1;
            else
                R <= 0;
                case S is
                    when '000' =>
                        S <= S + 1;
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when '001' =>
                        S <= S + 1;
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when '010' =>
                        S <= S + 1;
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when '011' =>
                        S <= S + 1;
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when '100' =>
                        S <= S + 1;
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when '101' =>
                        S <= S + 1;
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when '110' =>
                        S <= S + 1;
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when '111' =>
                        S <= '000';
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                    when others =>
                        S <= '000';
                        Y7 <= '0'; Y6 <= '0'; Y5 <= '0'; Y4 <= '0';
                        Y3 <= '0'; Y2 <= '0'; Y0 <= '0'; Y0 <= '0';
                end case;
            end if;
        end if;
    end process;
end architecture bhv;

--  (3)

library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.std_logic_unsigned.all;

entity AName is port (
    clk: in std_logic;
    Y1, Y0: out std_logic;
);
end entity AName;

architecture hhb of AName is
    signal R: std_logic_vector(25 downto 0);
    signal R1: std_logic_vector(3 downto 0); begin
    process (clk) begin
        if clk'event and clk = '1' then
            if R < 39999999 then
                R <= R + 1;
            else
                R <= 0;
                if R1 < 9 then
                    R1 <= R1 + 1;
                    Y0 <= '1';
                else
                    R1 <= '0000'
                    Y1 <= '1'; Y0 <= '1';
                end if;
            end if;
        end if;
    end process;
end architecture hhb;

--  步进电机驱动

library IEEE;
use IEEE.std_logic_1164.all;

entity AName is port (
    A1, A0: in std_logic;
    Y1, Y0: out std_logic;
);
end entity AName;

architecture bhv of AName is begin
    process (A0, A1) begin
        if A0 = '0' and A1 = '1' then
            Y1 <= '0'; Y0 <= '1';
        elsif A0 = '1' and A1 = '0' then
            Y1 <= '1'; Y0 <= '0';
        else
            Y1 <= '0'; Y0 <= '0';
        end if;
    end process;
end architecture bhv;

-- 加减可控计数器, md == 0为加, md == 1为减

library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity AName is port (
    clk: in std_logic;
    md: in std_logic;
    q: out std_logic;
);
end entity AName;

architecture bhv of AName is
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
