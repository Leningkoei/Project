const CREATE_BODY = {
    /**
     * 
     * @param {Object} parentNode 
     */
    NewBr: function(parentNode) {
        this.parentNode = parentNode;
        /**
         * 
         * @returns {Object} 
         */
        this.createElem = function() {
            let newElem = window.document.createElement("br");
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 
     * @param {Object} parentNode 
     * @param {String} innerText 
     */
    NewButton: function(parentNode, innerText) {
        this.parentNode = parentNode;
        this.innerText = innerText;
        /**
         * 
         * @returns {Object} 
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
     * 
     * @param {Object} parentNode 
     * @param {String} className 
     */
    NewDiv: function(parentNode, className) {
        this.parentNode = parentNode;
        this.className = className;
        /**
         * 
         * @returns {Object} 
         */
        this.createElem = function() {
            let newElem = window.document.createElement("div");
            newElem.className = this.className;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 
     * @param {Object} parentNode 
     * @param {String} innerHTML 
     */
    NewH: function(parentNode, innerHTML) {
        this.parentNode = parentNode;
        this.innerHTML = innerHTML;
        /**
         * 
         * @returns {Object} 
         */
        this.createElem = function() {
            let newElem = window.document.createElement("h2");
            newElem.innerHTML = this.innerHTML;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 
     * @param {Object} parentNode 
     * @param {String} id 
     */
    NewLabel: function(parentNode, id) {
        this.parentNode = parentNode;
        this.id = id;
        /**
         * 
         * @returns {Object} 
         */
        this.createElem = function() {
            let newElem = window.document.createElement("label");
            newElem.id = this.id;
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 
     * @param {Object} parentNode 
     */
    NewP: function(parentNode) {
        this.parentNode = parentNode;
        /**
         * 
         * @returns {Object} 
         */
        this.createElem = function() {
            let newElem = window.document.createElement("p");
            this.parentNode.appendChild(newElem);
            return newElem;
        }
    },
    /**
     * 
     * @param {Object} parentNode 
     * @param {String} id 
     * @param {String} className 
     * @param {String} cols 
     * @param {String} rows 
     */
    NewTextarea: function(parentNode, id, className, cols, rows) {
        this.parentNode = parentNode;
        this.id = id;
        this.className = className;
        this.cols = cols;
        this.rows = rows;
        /**
         * 
         * @returns {Object} 
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
    custom: undefined,
    main: function() {
        const answer = window.document.getElementById("code");
        const answerCode = answer.innerHTML;
        const titleDivObject = window.document.createElement("div");
        // const containerDivObject = window.document.createElement("div");
        const containerDiv = new this.NewDiv(answer.parentNode, "container");
        const containerDivObject = containerDiv.createElem();
        const word_divDiv = new this.NewDiv(containerDivObject, "word_div");
        const word_divDivObject = word_divDiv.createElem();
        const problem_discribeP = new this.NewDiv(word_divDivObject, "");
        const problem_discribePObject = problem_discribeP.createElem();
        const problem_discribeHead = new this.NewH(problem_discribePObject, "problem describe");
        const problem_discribeHeadObject = problem_discribeHead.createElem();
        const problem_discribeLabel = new this.NewLabel(problem_discribePObject, "problem");
        const problem_discribeLabelObject = problem_discribeLabel.createElem();
        const input_testP = new this.NewDiv(word_divDivObject, "");
        const input_testPObject = input_testP.createElem();
        const input_testHead = new this.NewH(input_testPObject, "input test");
        const input_testHeadObject = input_testHead.createElem();
        const input_testButton = new this.NewButton(input_testHeadObject, "test");
        const input_testButtonObject = input_testButton.createElem();
        let input_testTextarea = undefined;
        let input_testTextareaObject = undefined;
        let input_testBr = undefined;
        const result_printP = new this.NewDiv(word_divDivObject, "");
        const result_printPObject = result_printP.createElem();
        const result_printHead = new this.NewH(result_printPObject, "result print");
        const result_printHeadObject = result_printHead.createElem();
        const result_printTextarea = new this.NewTextarea(result_printPObject, "result", "textarea", "80", "8");
        const result_printTextareaObject = result_printTextarea.createElem();
        const code_divDiv = new this.NewDiv(containerDivObject, "code_div");
        const code_divDivObject = code_divDiv.createElem();
        const answer_showP = new this.NewDiv(code_divDivObject, "");
        const answer_showPObject = answer_showP.createElem();
        const answer_showHead = new this.NewH(answer_showPObject, "answer show");
        const answer_showHeadObject = answer_showHead.createElem();
        const answer_showTextarea = new this.NewTextarea(answer_showPObject, "answer", "textarea", "80", "48");
        const answer_showTextareaObject = answer_showTextarea.createElem();
        const custom = new MAIN.Custom();
        let i = undefined;
        // containerDivObject.className = "container";
        answer.parentNode.replaceChild(titleDivObject, answer);
        input_testButtonObject.onclick = function() {
            const problem = new MAIN.Problem();
            problem.main();
        }
        answer_showTextareaObject.innerHTML = answerCode;
        problem_discribeLabelObject.innerHTML = custom.problem;
        for (let i in custom.input) {
            input_testTextarea = new this.NewTextarea(input_testPObject, "input" + i.toString(), "textarea", "80", "8");
            input_testTextareaObject = input_testTextarea.createElem();
            input_testTextareaObject.innerHTML = custom.input[i];
            input_testBr = new this.NewBr(input_testPObject);
            input_testBr.createElem();
        }
        custom.createCustomElem && custom.createCustomElem();
    }
}
