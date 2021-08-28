const MAIN = {
    Custom: function() {
        this.problem = "numbers: 从小到大顺序数组;<br>在数组numbers中找到2个数, 使它们的和 === target;<br>返回这2个数的索引;";
        this.input = [ "[ 2, 7, 11, 15 ]", "9" ];
    },
    Problem: function() {
        this.numbers = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.target = new Function("return " + window.document.getElementById("input1").value + ";")();
        this.twoSum = function(numbers, target) {
            let x = 0;
            let y = numbers.length - 1;
            for (let sum = 0; x < y && target !== (sum = numbers[x] + numbers[y]); sum < target ? x++ : y--);
            if (x === y) {
                return [ -1, -1 ];
            }
            // 此处与leetCode不同;
            return [ x, y ];
            // for (let x = 0, y = 0; x < y;) {
            //     if (numbers[x] + numbers[y] ===  target) {
            //         return [ x + 1, y + 1 ];
            //     }
            //     else if (numbers[x] + numbers[y] < target) {
            //         x++;
            //     } else if (numbers[x] + numbers[y] > target) {
            //         y--;
            //     }
            // }
        }
        this.main = function() {
            window.document.getElementById("result").value = this.twoSum(this.numbers, this.target);
        }
    }
}
