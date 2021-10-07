import { Person } from "./Person.mjs";
window.vm = new Vue({
    "el": "#root",
    "data": function() {
        return {
            // "persons": [ {
            //     "id": 1,
            //     "name": "aaa",
            //     "age": 10
            // }, {
            //     "id": 2,
            //     "name": "bbb",
            //     "age": 20
            // }, {
            //     "id": 3,
            //     "name": "ccc",
            //     "age": 30
            // } ]
            "originPersons": [
                new Person(1, "abc", 10),
                new Person(2, "bbb", 20),
                new Person(3, "ccc", 30)
            ],
            // "persons": [
            //     // ...this.originPersons
            //     // new Person(1, "abc", 10),
            //     // new Person(2, "bbb", 20),
            //     // new Person(3, "ccc", 30)
            // ],
            "keyWord": "",
            "sortType": 0   //  0: 原顺序, 1: 升序, 2: 降序;
        }
    },
    // "methods": {
    //     "addNewPerson": function() {
    //         // const newPerson = {
    //         //     "id": this.persons[0].id - 1,
    //         //     "name": "zzz",
    //         //     "age": 0
    //         // }
    //         const newPerson = new Person();
    //         newPerson.id = this.persons[0].id - 1;
    //         newPerson.name = "zzz";
    //         newPerson.age = 0;
    //         this.persons.unshift(newPerson);
    //         console.log(this.persons);
    //     }
    // },
    "computed": {
        "persons": function() {
            return this.originPersons.filter((person) => person.name.indexOf(this.keyWord) !== -1).sort((a, b) => {
                switch (this.sortType) {
                    case 1:
                    return a.age - b.age;
                    case 2:
                    return b.age - a.age;
                }
            });
        }
    },
    "methods": {
        "setZero": function() {
            this.sortType = 0;
        },
        "setOne": function() {
            this.sortType = 1;
        },
        "setTwo": function() {
            this.sortType = 2;
        }
    }
    // "watch": {
    //     "keyWord": {
    //         "immediate": true,
    //         "handler": function(value) {
    //             return this.persons = this.originPersons.filter((person) => person.name.indexOf(value) !== -1);
    //         }
    //     }
    // }
})
