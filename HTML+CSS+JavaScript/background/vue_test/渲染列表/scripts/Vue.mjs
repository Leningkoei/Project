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
            "persons": [ 
                new Person(1, "aaa", 10),
                new Person(2, "bbb", 20),
                new Person(3, "ccc", 30)
            ]
        }
    },
    "methods": {
        "addNewPerson": function() {
            // const newPerson = {
            //     "id": this.persons[0].id - 1,
            //     "name": "zzz",
            //     "age": 0
            // }
            const newPerson = new Person();
            newPerson.id = this.persons[0].id - 1;
            newPerson.name = "zzz";
            newPerson.age = 0;
            this.persons.unshift(newPerson);
        }
    }
})
