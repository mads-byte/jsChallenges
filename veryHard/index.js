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
    learnLanguage(newLanguage) {
        this.languages.push(newLanguage)
    }
    listLanguages() {
        console.log(this.languages)
    }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
c1.listLanguages(); //Removed "console.log()" because the listLanguages method already contains console.log
c2.listLanguages();
c3.listLanguages();
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();


