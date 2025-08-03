"use strict";

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("I walk 10,000 steps a day!")
    }
};
const person3 = new Person("Jack", "Web Dev", "29");


person3.exercise();

