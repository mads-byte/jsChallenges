"use strict";

class Person {
    cosntructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise() {
        console.log(`I run every day for my health`);
    }

}

const person1 = new Person("Harold", "Backend Engineer", 20);

console.log(person1.name);

