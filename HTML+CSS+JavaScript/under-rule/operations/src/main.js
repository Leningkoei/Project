var getResult;

getResult = function(op)
{
    var x;
    var y;

    x = parseFloat(document.form0.x.value);
    y = parseFloat(document.form0.y.value);
    if (op === '+') document.form0.result.value = x + y;
    if (op === '-') document.form0.result.value = x - y;
    if (op === '*') document.form0.result.value = x * y;
    if (op === '/' && y != 0) document.form0.result.value = x / y;
    if (op === '=') document.form0.expresult.value = eval(document.form0.exp.value);
}
