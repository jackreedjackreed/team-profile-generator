// The first class is an `Employee` parent class with the following properties and methods:

const example = new Employee(nerm, id, email);

class Employee {
    constructor(name, id, email) {
        this.name = name; 
        this.id = id;
        this.email = email
    }
}


// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`


module.exports = Employee