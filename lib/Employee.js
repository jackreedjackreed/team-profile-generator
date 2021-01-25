// The first class is an `Employee` parent class with the following properties and methods:


class Employee {
    constructor(name, id, email, role) {
        // if (typeof name !== "string") {
        //     throw new Error("Expected parameter 'name' to be a non-empty string");
        //   }
        // if (!name.trim().length) {
        //     throw new Error("Expected parameter 'name' to be a non-empty string");
        // }
        // if (typeof email !== "string") {
        // throw new Error("Expected parameter 'email' to be a string");
        // }
        this.name = name; 
        this.id = id;
        this.email = email
        this.role = role
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}


module.exports = Employee