const MAIN = {
    Custom: function() {
        this.problem = "input0是数组, 存储的是链表中的val属性;<br>关于倒是第k个: 本例中倒数第2个node.val是4;";
        this.input = [ "[ 1, 2, 3, 4, 5 ]", "2" ];
    },
    Problem: function() {
        this.list = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.k = new Function("return " + window.document.getElementById("input1").value + ";")();
        this.ListNode = function(val) {
            this.val = val;
            this.next = null;
        }
        this.getKthFromEnd = function(head, k) {
            let p = head;
            while (k--) {
                p = p.next;
            }
            while (p) {
                p = p.next;
                head = head.next;
            }
            return head;
        }
        this.main = function() {
            const head = new this.ListNode(this.list[0]);
            let p = head;
            newList = this.list.slice(1, this.list.length);
            for (const val of newList) {
                const node = new this.ListNode(val);
                p.next = node;
                p = node;
            }
            window.document.getElementById("result").value = this.getKthFromEnd(head, this.k).val;
        }
    }
}
