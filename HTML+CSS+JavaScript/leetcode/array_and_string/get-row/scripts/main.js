const MAIN = {
    Custom: function() {
        this.problem = "杨辉三角中, 返回索引 === rowIndex的那行;";
        this.input = [ "4" ];
        this.createCustomElem = function() {
            const myBr = new CREATE_BODY.NewBr(window.document.getElementById("problem_discribe"));
            const myBrObject = myBr.createElem();
            const myImg = new CREATE_BODY.NewImg(myBrObject.parentNode, "./images/PascalTriangleAnimated.gif");
            myImg.createElem();
        }
    },
    Problem: function() {
        this.rowIndex = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.getRow = function(rowIndex) {
            let row = new Array(rowIndex + 1).fill(1);
            for (let num = 0, tempSave = 0, tempUse = 1; num <= rowIndex; num++) {
                for (let i = 1; i < num; i++) {
                    tempSave = row[i];
                    row[i] = tempUse + row[i];
                    tempUse = tempSave;
                }
            }
            // let row = [ 1 ];
            // for (let num = 0; num <= rowIndex; num++) {
            //     let rowKai = new Array(num + 1).fill(1);
            //     for (let i = 1, j = num - 1; i <= j; i++, j--) {
            //         rowKai[i] = row[i - 1] + row[i];
            //         rowKai[j] = row[j - 1] + row[j];
            //     }
            //     row = rowKai;
            // }
            return row;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.getRow(this.rowIndex);
        }
    }
}
