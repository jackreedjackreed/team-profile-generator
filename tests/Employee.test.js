// Employee Tests
const Employee = require("../lib/Employee.js")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const employee = new Employee("Jerf", "B870943", "Jerf@email.com", "Employee");

            // expect that the arguments get passed through and create object with all three arguments
            expect(employee.name).toEqual("Jerf");
            expect(employee.id).toEqual("B870943");
            expect(employee.email).toEqual("Jerf@email.com");  
        });
    });
    describe("getName", () => {
        it("should return name of the employee", () => {
        const employee = new Employee("Jerf", "B870943", "Jerf@email.com")
        expect(employee.getName()).toEqual("Jerf")
        });
    });
    describe("getId", () => {
        it("should return id of the employee", () => {
        const employee = new Employee("Jerf", "B870943", "Jerf@email.com")
        expect(employee.getId()).toEqual("B870943")
        });
    });
    describe("getEmail", () => {
        it("should return email of the employee", () => {
        const employee = new Employee("Jerf", "B870943", "Jerf@email.com")
        expect(employee.getEmail()).toEqual("Jerf@email.com")
        });
    });
    describe("getRole", () => {
        it("should return role of the employee", () => {
        const employee = new Employee("Jerf", "B870943", "Jerf@email.com")
        expect(employee.getRole()).toEqual("Employee")
        });
    });
});