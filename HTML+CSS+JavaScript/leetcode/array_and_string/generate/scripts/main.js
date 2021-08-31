const MAIN = {
    Custom: function() {
        this.problem = "生成numRows行杨辉三角并返回;";
        this.input = [ "5" ];
        this.createCustomElem = function() {
            const myBr = new CREATE_BODY.NewBr(window.document.getElementById("problem_discribe"));
            const myBrObject = myBr.createElem();
            const myImg = new CREATE_BODY.NewImg(myBrObject.parentNode, "./images/PascalTriangleAnimated.gif");
            myImg.createElem();
        }
    },
    Problem: function() {
        this.numRows = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.generate = function(numRows) {
            let result = new Array(numRows);
            result[0] = [ 1 ];
            for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
                let row = new Array(rowIndex + 1).fill(1);
                for (let i = 1, j = row.length - 2; i <= j; i++, j--) {
                    row[i] = result[rowIndex - 1][i - 1] + result[rowIndex - 1][i];
                    row[j] = result[rowIndex - 1][j - 1] + result[rowIndex - 1][j];
                }
                result[rowIndex] = row;
            }
            return result;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.generate(this.numRows).join("\n");
        }
    }
}
