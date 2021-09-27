import { mergeSort } from "./归并排序.mjs";
const that = {};
that.resultPrinter = window.document.getElementById("result");
that.inputElem = window.document.getElementById("input");
window.main = function() {
    const input = new Function("return " + that.inputElem.value + ";")();
    const resultArray = mergeSort(input);
    let result = "";
    for (const i of resultArray) {
        result += `\t< ${i.toString()} >`;
    }
    that.resultPrinter.innerText = result + "\n" + resultArray.length.toString();
}
