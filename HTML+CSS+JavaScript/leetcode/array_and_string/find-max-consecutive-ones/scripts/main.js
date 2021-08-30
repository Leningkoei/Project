const MAIN = {
    Custom: function() {
        this.problem = "数组nums只包含0, 1;<br>计算nums中最大连续1的个数;";
        this.input = [ "[ 1, 1, 0, 1, 1, 1 ]" ];
    },
    Problem: function() {
        this.nums = new Function("return " + window.document.getElementById("input0").value + ";")();
        /**
         * 
         * @param {number[]} nums 
         * @returns {number}
         */
        this.findMaxConseCutiveOnes = function(nums) {
            let result = 0;
            let resultKai = 0;
            for (let i = 0; i < nums.length; nums[i++] === 1 ? resultKai++ : result = Math.max(result, resultKai) + (resultKai = 0));
            // for (const i of nums) {
            //     if (i === 1) {
            //         resultKai++;
            //     } else {
            //         result = Math.max(result, resultKai);
            //         resultKai = 0;
            //     }
            // }
            return Math.max(result, resultKai);
        }
        this.main = function() {
            window.document.getElementById("result").value = this.findMaxConseCutiveOnes(this.nums);
        }
    }
}
