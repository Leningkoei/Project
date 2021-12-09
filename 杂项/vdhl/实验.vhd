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
        if A0 === '1' then
            Y0 <= '1';
        else then
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

architecture bhv of AName is begin
end architecture bhv;

--  分频器, 计数器设计

--  步进电机驱动

--  半加器
