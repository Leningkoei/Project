const MAIN = {
    Custom: function() {
        this.problem = "在数组nums中找出子数组, 它满足sum() >= target, 返回子数组的长度;<br>子数组是元数组的连续的区间;";
        this.input = [ "7", "[ 2, 3, 1, 2, 4, 3 ]" ];
        this.createCustomElem = function() {
            const myBr = new CREATE_BODY.NewBr(window.document.getElementById("problem_discribe"));
            const myImage = new CREATE_BODY.NewImg(myBr.parentNode, "../../images/ksm.png");
            const myPs = new CREATE_BODY.NewLabel(myBr.parentNode, "ps");
            myBr.createElem();
            myImage.createElem();
            myBr.createElem();
            myPsObject = myPs.createElem();
            myPsObject.innerHTML = "本图文是测试1下MAIN.Custom.createCustomElem能否意料中运行;";
        }
    },
    Problem: function() {
        this.target = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.nums = new Function("return " + window.document.getElementById("input1").value + ";")();
        /**
         * 
         * @param {number} target 
         * @param {[]} nums 
         * @returns {number} 
         */
        this.minSubArrayLen = function(target, nums) {
            let sum = 0;
            let fast = 0;
            let slow = -1;
            let result = nums.length;
            while (fast < nums.length) {
                sum += nums[fast++];
                // 上1行 === 下2行;
                // sum += nums[fast];
                // fast++;
                if (sum >= target) {
                    while (sum >= target) {
                        sum -= nums[++slow];
                        // 上1行 === 下2行;
                        // slow++;
                        // sum -= nums[slow];
                    }
                    result = Math.min(result, fast - slow);
                }
            }
            return slow === -1 ? 0 : result;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.minSubArrayLen(this.target, this.nums);
        }
    }
}
