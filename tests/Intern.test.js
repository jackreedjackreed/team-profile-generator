// Intern Tests
const Employee = require("../lib/Employee.js")
const Intern = require("../lib/Intern.js")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an employee with a name, id, email, and github if provided valid arguments", () => {
            const intern = new Intern("Jerf", "B870943", "Jerf@email.com", "Bumble Bee University");

            // expect that the arguments get passed through and create object with all three arguments
            expect(intern.name).toEqual("Jerf");
            expect(intern.id).toEqual("B870943");
            expect(intern.email).toEqual("Jerf@email.com");
            expect(intern.school).toEqual("Bumble Bee University");  
        });
    });
    describe("getSchool", () => {
        it("should return the office number of the intern", () => {
        const intern = new Intern("Jerf", "B870943", "Jerf@email.com", "Bumble Bee University");
        expect(intern.getSchool()).toEqual("Bumble Bee University")
        });
    });
});