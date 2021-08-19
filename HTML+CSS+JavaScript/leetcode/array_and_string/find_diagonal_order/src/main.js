const MAIN = {
    Custom: function() {
        this.problem = "mat: M * N的矩阵;<br>以[ 0, 0 ]起始, 副对角线蛇形遍历矩阵;";
        this.input = [ "[ [ 1, 2, 3 ],\n  [ 4, 5, 6 ],\n  [ 7, 8, 9 ] ]" ];
    },
    Problem: function() {
        this.matrix = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.findDiagonalOrder = function(mat) {
            var dircetion = false;
            var xMax = mat[0].length;
            var yMax = mat.length;
            // 先开辟内存空间似乎可以节省时间和内存;
            var result = new Array(yMax * xMax);
            var i = 0;
            const findDiagonalOrderKai = function(x, y) {
                if (x >= xMax - 1 && y >= yMax - 1) {
                    result[i] = mat[y][x];
                    return;
                }
                if ((x === 0 || y + 1 >= yMax) && dircetion) {
                    dircetion = false;
                    if (y + 1 >= yMax) {
                        result[i++] = mat[y][x];
                        findDiagonalOrderKai(x + 1, y);
                    } else {
                        result[i++] = mat[y][x];
                        findDiagonalOrderKai(x, y + 1);
                    }
                    return;
                } else if ((y === 0 || x + 1 >= xMax) && !dircetion) {
                    dircetion = true;
                    if (x + 1 >= xMax) {
                        result[i++] = mat[y][x];
                        findDiagonalOrderKai(x, y + 1);
                    } else {
                        result[i++] = mat[y][x];
                        findDiagonalOrderKai(x + 1, y);
                    }
                    return;
                }
                if (dircetion) {
                    result[i++] = mat[y][x];
                    findDiagonalOrderKai(x - 1, y + 1);
                    return;
                } else {
                    result[i++] = mat[y][x];
                    findDiagonalOrderKai(x + 1, y - 1);
                    return;
                }
            }
            findDiagonalOrderKai(0, 0);
            return result;
        }
        this.main = function() {
            let output = this.findDiagonalOrder(this.matrix);
            window.document.getElementById("result").value = output;
        }
    }
}
