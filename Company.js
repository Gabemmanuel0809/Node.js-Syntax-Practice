class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    Work() {
        if(this.role == "Manager" || this.role == "CEO") {
            console.log(`${this.name}: Ive got better things to manage`);
        } else {
            console.log(`${this.name} started to work`);
        }
    }

    PerformanceReview() {
        if(this.role == "HR") {
            console.log(`${this.name}: Its time for some performance review`);
        } else if(this.role == "CEO") {
            console.log(`${this.name}: Its the perfect time for that`) 
        } else {
            console.log(`${this.name} was now anxious`);
        }
    }
}

class PM extends Employee {
    role = "Manager";

    constructor(name) {
        super(name);
    }
}

class CEO extends Employee {
    role = "CEO";

    constructor(name) {
        super(name);
    }
}

class DocumentEncoder extends Employee {
    role = "Document Encoder";

    constructor(name) {
        super(name);
    }
}

class HumanResources extends Employee {
    role = "HR";

    constructor(name) {
        super(name);
    }
}

let John = new CEO("John");
let Alexa = new HumanResources("Alexa");
let Manny = new PM("Manny");
let Bob = new DocumentEncoder("Bob");

let employees = [Alexa, John, Manny, Bob];

employees.forEach(function(employee) {
    employee.PerformanceReview();
});
