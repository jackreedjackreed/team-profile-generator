// The first class is an `Employee` parent class with the following properties and methods:
const { describe, expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee.js")


const example = new Employee("Jerf", "B870943", "Jerf@email.com");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const employee = new Employee("Jerf", "B870943", "Jerf@email.com");

            // expect that the arguments get passed through and create object with all three arguments
            expect(employee.name).toEqual("Jerf");
            expect(employee.id).toEqual("B870943");
            expect(employee.email).toEqual("Jerf@email.com");  
        });
        it("should throw an error if name is not a string", () => {
            // don't mind if id is non-string
            const employee = () => new Employee(7, 8, 99999);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(employee).toThrowError(err);
        });
        it("should throw an error if name is not a string, email is not a string", () => {
            // don't mind if id is non-string
            const employee = () => new Employee("Jerf", 8, 99999);
            const err = new Error("Expected parameter 'email' to be a string");
      
            expect(employee).toThrowError(err);
        });
        it("should throw an error if not provided text for name", () => {
            // Arrange
            const employee = () => new Employee("", 3, "Jerf@email.com");
            const err = new Error(
              "Expected parameter 'name' to be a non-empty string")
            // Assert
            expect(employee).toThrowError(err);  
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