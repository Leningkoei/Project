const MAIN = {
// var MAIN = {
    // 客制部分;
    Custom: function() {
        // 输入问题描述;
        this.problem = "matrix: 形如[ [ 坐标, .. ], .. ]的方阵;";
        // 输入预定的问题参数, 按照数组形式分割;
        this.input = [ "[ [ 1, 2, 3 ],\n  [ 4, 5, 6 ],\n  [ 7, 8, 9] ]" ];
        // // 输入问题参数的个数
        // this.inputQuantity = 2;
        // 里客制部分;
        this.createCustomElem = function() {
            // TODO;
        }
        // this.updatePage = function() {
            // let br = new CREATE_BODY.NewBr(CREATE_BODY.custom);
            // const inputOne = new CREATE_BODY.NewTextarea(CREATE_BODY.custom, "input1", "textarea", "80", "8");
            // window.document.getElementById("problem").innerHTML = this.problem;
            // window.document.getElementById("input").innerHTML = this.input;
            // br.createElem();
            // inputOne.createElem();

            // window.document.getElementById("doTest").onclick = function() {
            //     const problem = new MAIN.Problem();
            //     problem.getResult();
            //     problem.showResult();
            // }
        // }
    },
    Problem: function() {
        this.matrix = new Function("return " + window.document.getElementById("input0").value + ";")();
        /**
         * 
         * @param {void} 
         * @returns {void} 
         */
        this.getResult = function() {
            let matrix = this.matrix;
            /**
             * 
             * @param {number[][]} matrix 
             * @returns {void} 
             */
            const rotateMatrix = function(matrix) {
                // position: matrix[y][x];
                // let temp;
                let x;
                let y;
                // 水平翻转;
                // for (y = 0; y < matrix.length / 2; y++) {
                //     temp = matrix[y];
                //     matrix[y] = matrix[matrix.length - 1 - y];
                //     matrix[matrix.length - 1 - y] = temp;
                // }
                matrix.reverse();
                // 主对角线翻转;
                for (y = 1; y < matrix.length; y++) {
                    for (x = 0; x < y; x++) {
                        // temp = matrix[y][x];
                        // matrix[y][x] = matrix[x][y];
                        // matrix[x][y] = temp;
                        [ matrix[y][x], matrix[x][y] ] = [ matrix[x][y], matrix[y][x] ];
                    }
                }
            }
            rotateMatrix(matrix);
        }
        this.showResult = function() {
            window.document.getElementById("result").value = this.matrix;
        }
        this.main = function() {
            this.getResult();
            this.showResult();
        }
    }
    // createCustom: function() {
    //     const Custom = new this.Custom();
    //     CREATE_Custom.main();
    //     Custom.updatePage();
    // }
    // /**
    //  * @param {void};
    //  * @returns {void};
    //  */
    // main: function() {
    //     const problem = new this.Problem();
    //     problem.getResult();
    //     problem.showResult();
    // }
}
