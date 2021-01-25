// Engineer Tests
const Employee = require("../lib/Employee.js")
const Engineer = require("../lib/Engineer.js")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an employee with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer("Jerf", "B870943", "Jerf@email.com", "c0de_m0nkey_want_banana");

            // expect that the arguments get passed through and create object with all three arguments
            expect(engineer.name).toEqual("Jerf");
            expect(engineer.id).toEqual("B870943");
            expect(engineer.email).toEqual("Jerf@email.com");
            expect(engineer.github).toEqual("c0de_m0nkey_want_banana");  
        });
    });
    describe("getGithub", () => {
        it("should return github of the engineer", () => {
        const engineer = new Engineer("Jerf", "B870943", "Jerf@email.com", "c0de_m0nkey_want_banana");
        expect(engineer.getGithub()).toEqual("c0de_m0nkey_want_banana")
        });
    });
});