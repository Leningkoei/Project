-- 3.2     
    --               3态缓冲器
    --      |-----------|-----------|
    --      |         buf3s         |
    -- -----| input          output |-----
    --      |         enable        |
    --      |-----------|-----------|
    --                  |
    --                  |
    --
    --             2选1多路选择器
    --      |-----------|-----------|
    --      |                       |
    -- -----| in0                   |
    --      |                output |-----
    -- -----| in1                   |
    --      |          sel          |
    --      |-----------|-----------|
    --                  |
    --                  |
-- ***
-- 3.3
    -- if - else
        library ieee;
        use ieee.std_logic_1164.all;
        entity mux41 is
            port(
                a, b, c, d: in std_logic;
                s0: in std_logic;
                s1: in std_logic;
                y: out std_logic
            );
        end entity mux41;
        architecture if_mux41 of mux41 is
            signal s0s1: std_logic_vector(1 downto 0);
        begin
            s0s1 <= s1 & s0;
            process(s0s1, a, b, c, d)
            begin
                if s0s1 = "00" then y <= a;
                elsif s0s1 = "01" then y <= b;
                elsif s0s1 = "10" then y <= c;
                else y <= d;
                end if;
            end process;
        end architecture if_mux41;
    -- ***
    -- case
        library ieee;
        use ieee.std_logic_1164.all;
        entity mux41 is
            port(
                a, b, c, d: in std_logic;
                s0: in std_logic;
                s1: in std_logic;
                y: out std_logic
            );
        end entity mux41;
        architecture case_mux41 of mux41 is
            signal s0s1: std_logic_vector(1 downto 0);
        begin
            s0s1 <= s1 & s0;
            process (s0, s1, a, b, c, d)
            begin
                case s0s1 is
                    when "00" => y <= a;
                    when "01" => y <= b;
                    when "10" => y <= c;
                    when "11" => y <= d;
                    when others => null;
                end case;
            end process;
        end architecture case_mux41;
-- ***
-- 3.5
    -- 顺序赋值
        library ieee;
        use ieee.std_logic_1164.all;
        use ieee.std_logic_unsigned.all;
        entity decoder3to8 is
            port(
                din: in std_logic_vector(2 downto 0);
                dout: out bit_vector(7 downto 0)
            );
        end decoder3to8;
        architecture behave of decoder3to8 is
        begin
            with conv_integer(din) select
            dout <=
                "00000001" when 0,
                "00000010" when 1,
                "00000100" when 2,
                "00001000" when 3,
                "00010000" when 4,
                "00100000" when 5,
                "01000000" when 6,
                "10000000" when 7,
            unaffected when others;
        end behave;
    -- ***
    -- case
        library ieee;
        use ieee.std_logic_1164.all;
        use ieee.std_logic_unsigned.all;
        entity decoder3to8 is
            port(
                din: in std_logic_vector(2 downto 0);
                dout: out bit_vector(7 downto 0)
            );
        end decoder3to8;
        architecture behave of decoder3to8 is
        begin
            process(din)
            begin
                case conv_integer(din) is
                    when 0 => dout <= "00000001";
                    when 1 => dout <= "00000010";
                    when 2 => dout <= "00000100";
                    when 3 => dout <= "00001000";
                    when 4 => dout <= "00010000";
                    when 5 => dout <= "00100000";
                    when 6 => dout <= "01000000";
                    when 7 => dout <= "10000000";
                    when others => null;
                end case;
            end process;
        end behave;
    -- ***
    -- if - else
        library ieee;
        use ieee.std_logic_1164.all;
        use ieee.std_logic_unsigned.all;
        entity decoder3to8 is
            port(
                din: in std_logic_vector(2 downto 0);
                dout: out bit_vector(7 downto 0)
            );
        end decoder3to8;
        architecture behave of decoder3to8 is
        begin
            process(din)
            begin
                if conv_integer(din) = 0 then dout <= "00000001";
                elsif conv_integer(din) = 1 then dout <= "00000010";
                elsif conv_integer(din) = 2 then dout <= "00000100";
                elsif conv_integer(din) = 3 then dout <= "00001000";
                elsif conv_integer(din) = 4 then dout <= "00010000";
                elsif conv_integer(din) = 5 then dout <= "00100000";
                elsif conv_integer(din) = 6 then dout <= "01000000";
                elsif conv_integer(din) = 7 then dout <= "10000000";
                end if;
            end process;
        end behave;
    -- ***
    -- 移位
        library ieee;
        use ieee.std_logic_1164.all;
        use ieee.std_logic_unsigned.all;
        entity decoder3to8 is
            port(
                din: in std_logic_vector(2 downto 0);
                dout out bit_vector(7 downto 0)
            );
        end decoder3to8;
        architecture behave of decoder3to8 is
        begin
            dout <= "00000001" sll conv_integer(din);
        end behave;
