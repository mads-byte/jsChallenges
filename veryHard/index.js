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
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
};

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age); //In a derived class such as this one, "super()" must be called before the use of "this"
        this.languages = languages;
        this.busy = true;
    }
    completeTask() {
        this.busy = false;
        console.log(this.busy);
    }
    acceptNewTask() {
        this.busy = true;
        console.log(this.busy);
    }
    offerNewTask() {
        if (this.busy == true) {
            console.log(`${this.name} can't accept any new tasks right now`)
        }
        if (this.busy == false) {
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }
}


const person1 = new Programmer("Harold", "Backend Engineer", 20, ["HTML", "CSS", "JS"]);

person1.completeTask();
person1.offerNewTask();

