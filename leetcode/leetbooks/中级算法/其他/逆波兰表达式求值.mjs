export { evalRPN };
/**
 * @param {string[]} tokens
 * @returns {number}
 */
function evalRPN(tokens) {
    const stack = [];
    // 遇到运算符则 pop() 出 stack top 的2个值进行运算;
    // 每次运算的结果 push() 入 stack top;
    for (let i = 0; i < tokens.length; i++) {
        const elem = tokens[i];
        if (elem === "+" || elem === "-" || elem === "*" || elem === "/") {
            const num1 = stack.pop();
            const num0 = stack.pop();
            let result = 0;
            switch (elem) {
                case "+":
                    result = num0 + num1;
                break; case "-":
                    result = num0 - num1;
                break; case "*":
                    result = num0 * num1;
                break; case "/":
                    result = parseInt(num0 / num1);
                break;
            }
            stack.push(result);
        } else {
            stack.push(parseInt(elem));
        }
    }
    return stack.pop();
}
