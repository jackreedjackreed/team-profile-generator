// Manager Tests
const Employee = require("../lib/Employee.js")
const Manager = require("../lib/Manager.js")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an employee with a name, id, email, and github if provided valid arguments", () => {
            const manager = new Manager("Jerf", "B870943", "Jerf@email.com", "B_001");

            // expect that the arguments get passed through and create object with all three arguments
            expect(manager.name).toEqual("Jerf");
            expect(manager.id).toEqual("B870943");
            expect(manager.email).toEqual("Jerf@email.com");
            expect(manager.officeNum).toEqual("B_001");  
        });
    });
    describe("getOfficeNum", () => {
        it("should return the office number of the manager", () => {
        const manager = new Manager("Jerf", "B870943", "Jerf@email.com", "B_001");
        expect(manager.getOfficeNum()).toEqual("B_001")
        });
    });
});