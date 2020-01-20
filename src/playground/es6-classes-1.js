class Person {
    constructor(name = 'Anonymous',age = 0) {
        this.name = name;
        this.age = age;
    };
    getGreeting(){
        return `Hi, I am ${this.name} !`;
    };
    getDescription() {
        return `${this.name} is ${this.age} years old`
    };
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !! this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    };
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasTravel() {
        return !! this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasTravel()) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    };
}


// const me = new Student('Mai',28, 'Comuter Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.hasMajor());

const me = new Traveler('Mei',24,'Tokyo');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());