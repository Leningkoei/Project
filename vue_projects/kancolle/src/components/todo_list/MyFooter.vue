<template>
<div class = "my-footer" v-show = "countKaiNi">
    <div style = "display: inline-block"
    ><!-- <input
        type = "checkbox"
        :checked = "isAllCompleted"
        @click = "chooseAll"
    > --><!-- <input
        type = "checkbox"
        v-model = "chooseAllKai"
    > --><input
        type = "checkbox"
        v-model = "chooseAllKaiNi"
    ><!-- <span
    >{{completedCount}} / {{count}} tasks has done</span
    > --><!-- <span
    >{{completedCountKai}} / {{countKai}} tasks has done</span
    > --><span
    >{{completedCountKaiNi}} / {{countKaiNi}} tasks has done</span></div
    ><!-- <button
        class = "btn btn-danger"
        @click = "clearAllCompleted"
    >clear completed tasks</button
    > --><button
        class = "btn btn-danger"
        @click = "deleteAllCompleted"
    >delete completed tasks</button>
</div>
</template>

<script>
export default {
    "name": "MyFooter",
    "props": [ "myContent" ],   // Kai: 修改了 myContent.$refs.todos.todos, 违规了阿; -- KaiNi: 通过调用 myContent.$refs.todos 的方法修改 todos, 没有直接修改;
    "data"() {
        return {
            "completedCount": 0,
            "count": 0,
            "todos": null
        }
    },
    "computed": {
        // "todos"() {
        //     return this.myContent ? this.myContent.$refs.todos.todos : undefined;
        // },
        "completedCountKai"() {
            if (this.todos) {
                return this.todos.reduce((count, todo) => {
                    if (todo.isCompleted) {
                        count++;
                    }
                    return count;
                }, 0);
            }
        },
        "countKai"() {
            return this.todos ? this.todos.length : undefined;
        },
        "isAllCompleted"() {
            return this.completedCountKai === this.countKai;
        },
        "chooseAllKai": {
            "get"() {
                return this.completedCountKai === this.countKai;
            },
            "set"(checked) {
                this.todos.forEach((todo) => todo.isCompleted = checked);
            }
        },
        "completedCountKaiNi"() {
            return this.myContent ? this.myContent.$refs.todos.completedCount : undefined;
        },
        "countKaiNi"() {
            return this.myContent ? this.myContent.$refs.todos.count : undefined;
        },
        "chooseAllKaiNi": {
            "get"() {
                return this.completedCountKaiNi === this.countKaiNi;
            },
            /**
             * 在调用该方法时, myContent 绝对已经可以通过 props 获取到了;
             */
            "set"(checked) {
                this.myContent.$refs.todos.chooseAll(checked);
            }
        }
    },
    "methods": {
        "changeCompletedCount"(flag) {
            flag ? this.completedCount++ : this.completedCount--;
        },
        "changeCount"(flag) {
            flag ? this.count++ : this.count--;
        },
        "chooseAll"() {
            const todosIsCompleted = !this.isAllCompleted;  // 不要直接赋这个值给 todo.isCompleted 可能会出现更新延迟的问题;
            this.todos.forEach((todo) => todo.isCompleted = todosIsCompleted);
        },
        "clearAllCompleted"() {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].isCompleted) {
                    this.todos.splice(i, 1);
                    i--;
                }
            }
        },
        "deleteAllCompleted"() {
            this.myContent.$refs.todos.deleteAllCompleted();
        }
    },
    // "mounted"() {
        // console.log(this.myContent); // 注意 props 传参可能晚于 mounted!!!
    // }
    // "watch": {
    //     "myContent"() {
    //         this.todos = this.myContent.$refs.todos.todos;
    //     }
    // }
}
</script>

<style lang="less" scoped>
// total-width: 640px = [10px] * 2 + 10px * 2 + 600px;
.my-footer {
    margin: 4px auto 0 auto;
    padding: 10px;
    height: 36px;
    width: 600px;
    border-radius: 4px;
    line-height: 32px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /deep/ div {
        cursor: pointer;
        input {
            margin-right: 8px;
            vertical-align: middle;
            position: relative;     // 使 top 属性可设置;
            // top: -2px;              // top < 0 ? 向上偏移 : 向下偏移;
        }
    }
    /deep/ .btn {
        font-size: 12px;
        line-height: 24px;
        vertical-align: middle;
        text-align: center;
        padding: 4px 12px;
        margin-bottom: 0;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    /deep/ .btn:focus {
        outline: none;
    }
    /deep/ .btn-danger {
        color: #ffffff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    /deep/ .btn-danger:focus {
        background-color: #bd362f;
    }
    /deep/ .btn-danger:hover {
        background-color: #bd362f;
    }
// span {
//     color: red;
// }
}
</style>
