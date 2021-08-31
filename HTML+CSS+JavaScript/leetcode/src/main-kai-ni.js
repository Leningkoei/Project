const CREATE_BODY = {
    /**
     * 设置将要新建的<br>的位置和各项属性
     * @param {object} parentNode 父节点指针
     */
    NewBr: function(parentNode) {
        this.parentNode = parentNode;
        /**
         * 新建<br>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement("br");
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 设置将要新建的<button>的位置和各项属性
     * @param {object} parentNode 父节点指针
     * @param {string} innerText innerText属性
     */
    NewButton: function(parentNode, innerText) {
        this.parentNode = parentNode;
        this.innerText = innerText;
        /**
         * 新建<button>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement("button");
            newElem.type = "button";
            newElem.innerText = this.innerText;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 设置将要新建的<div>的位置和各项属性
     * @param {object} parentNode 父节点指针
     * @param {string} className class属性
     */
    NewDiv: function(parentNode, className) {
        this.parentNode = parentNode;
        this.className = className;
        /**
         * 新建<div>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement("div");
            newElem.className = this.className;
            newElem.id = this.className;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 设置将要新建的<h_>的位置和等级和各项属性
     * @param {object} parentNode 父节点指针
     * @param {string} rank 标题等级
     * @param {string} innerText innerText属性
     */
    NewH: function(parentNode, rank, innerText) {
        this.parentNode = parentNode;
        this.rank = rank;
        this.innerText = innerText;
        /**
         * 新建<h_>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement(this.rank);
            newElem.innerText = this.innerText;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 设置将要新建的<img>的位置和各项属性
     * @param {object} parentNode 父节点指针
     * @param {string} src src属性
     */
    NewImg: function(parentNode, src) {
        this.parentNode = parentNode;
        this.src = src;
        /**
         * 新建<img>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement("img");
            newElem.src = this.src;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 设置将要新建的<label>的位置和各项属性
     * @param {object} parentNode 父节点指针
     * @param {string} id id属性
     */
    NewLabel: function(parentNode, id) {
        this.parentNode = parentNode;
        this.id = id;
        /**
         * 新建<label>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement("label");
            newElem.id = this.id;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 设置将要新建的<p>的位置和各项属性
     * @param {object} parentNode 父节点指针
     */
    NewP: function(parentNode) {
        this.parentNode = parentNode;
        /**
         * 新建<p>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement("p");
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 设置将要新建的<textarea>的位置和各项属性
     * @param {object} parentNode 父节点指针
     * @param {string} id id属性
     * @param {string} className class属性
     * @param {string} cols cols属性
     * @param {string} rows rows属性
     */
    NewTextarea: function(parentNode, id, className, cols, rows) {
        this.parentNode = parentNode;
        this.id = id;
        this.className = className;
        this.cols = cols;
        this.rows = rows;
        /**
         * 新建<textarea>
         * @returns {object} 新节点指针
         */
        this.createElem = function() {
            let newElem = window.document.createElement("textarea");
            newElem.id = this.id;
            newElem.className = this.className;
            newElem.cols = this.cols;
            newElem.rows = this.rows;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    // custom: undefined,
    main: function() {
        const answer = window.document.getElementById("code");
        const answerCode = answer.innerHTML;
        const titleDivObject = window.document.createElement("div");
        const titleH = new this.NewH(titleDivObject, "h1", window.document.title);
        const titleHObject = titleH.createElem();
        // const containerDivObject = window.document.createElement("div");
        const containerDiv = new this.NewDiv(answer.parentNode, "container");
        const containerDivObject = containerDiv.createElem();
        const word_divDiv = new this.NewDiv(containerDivObject, "word_div");
        const word_divDivObject = word_divDiv.createElem();
        const problem_discribeP = new this.NewDiv(word_divDivObject, "problem_discribe");
        const problem_discribePObject = problem_discribeP.createElem();
        const problem_discribeHead = new this.NewH(problem_discribePObject, "h2", "problem describe");
        const problem_discribeHeadObject = problem_discribeHead.createElem();
        const problem_discribeLabel = new this.NewLabel(problem_discribePObject, "problem");
        const problem_discribeLabelObject = problem_discribeLabel.createElem();
        const input_testP = new this.NewDiv(word_divDivObject, "input_test");
        const input_testPObject = input_testP.createElem();
        const input_testHead = new this.NewH(input_testPObject, "h2", "input test");
        const input_testHeadObject = input_testHead.createElem();
        const input_testButton = new this.NewButton(input_testHeadObject, "test");
        const input_testButtonObject = input_testButton.createElem();
        let input_testTextarea = undefined;
        let input_testTextareaObject = undefined;
        let input_testBr = undefined;
        const result_printP = new this.NewDiv(word_divDivObject, "result_print");
        const result_printPObject = result_printP.createElem();
        const result_printHead = new this.NewH(result_printPObject, "h2", "result print");
        const result_printHeadObject = result_printHead.createElem();
        const result_printTextarea = new this.NewTextarea(result_printPObject, "result", "textarea", "80", "8");
        const result_printTextareaObject = result_printTextarea.createElem();
        const code_divDiv = new this.NewDiv(containerDivObject, "code_div");
        const code_divDivObject = code_divDiv.createElem();
        const answer_showP = new this.NewDiv(code_divDivObject, "answer_show");
        const answer_showPObject = answer_showP.createElem();
        const answer_showHead = new this.NewH(answer_showPObject, "h2", "answer show");
        const answer_showHeadObject = answer_showHead.createElem();
        const answer_showTextarea = new this.NewTextarea(answer_showPObject, "answer", "textarea", "80", "48");
        const answer_showTextareaObject = answer_showTextarea.createElem();
        const custom = new MAIN.Custom();
        let i = undefined;
        titleDivObject.className = "title";
        // containerDivObject.className = "container";
        answer.parentNode.replaceChild(titleDivObject, answer);
        input_testButtonObject.onclick = function() {
            const problem = new MAIN.Problem();
            problem.main();
        }
        answer_showTextareaObject.innerHTML = answerCode;
        problem_discribeLabelObject.innerHTML = custom.problem;
        for (const i in custom.input) {
            input_testTextarea = new this.NewTextarea(input_testPObject, "input" + i, "textarea", "80", "8");
            input_testTextareaObject = input_testTextarea.createElem();
            input_testTextareaObject.innerHTML = custom.input[parseInt(i)];
            input_testBr = new this.NewBr(input_testPObject);
            input_testBr.createElem();
        }
        custom.createCustomElem && custom.createCustomElem();
    }
}
window.document.querySelector("body").onclick = CREATE_BODY.main();
