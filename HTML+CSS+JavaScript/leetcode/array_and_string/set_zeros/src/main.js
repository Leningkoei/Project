const MAIN = {
    Custom: function() {
        this.problem = "matrix: M * N的矩阵;<br>将matrix中含有\"0\"元素的行与列清0;";
        this.input = [ "[ [ 0, 1, 2, 0 ],\n  [ 3, 4, 5, 2 ],\n  [ 1, 3, 1, 5 ] ]" ];
    },
    Problem: function() {
        this.matrix = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.output = "";
        this.setZero = function(matrix) {
            const cols = new Array(matrix[0].length).fill(false);
            Array.prototype._flag = false;
            for (let y in matrix) {
                for (let x in matrix[0]) {
                    if (matrix[y][x] === 0) {
                        matrix[y]._flag = true;
                    }
                }
            }
            for (let y in matrix) {
                for (let x in matrix[0]) {
                    if (matrix[y][x] === 0) {
                        for (let y in matrix) {
                            matrix[y][x] = 0;
                        }
                    }
                }
            }
            for (let y in matrix) {
                if (matrix[y]._flag === true) {
                    matrix[y] = new Array(matrix[0].length).fill(0);
                }
            }
        }
        this.getOutput = function() {
            for (let y in this.matrix) {
                for (let x in this.matrix[0]) {
                    this.output += "\t";
                    (this.matrix[y][x] || this.matrix[y][x] === 0) && (this.output += this.matrix[y][x].toString());
                }
                this.output += "\n";
            }
            return this.output;
        }
        this.main = function() {
            this.setZero(this.matrix);
            window.document.getElementById("result").value = this.getOutput();
        }
    }
}
