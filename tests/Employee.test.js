// The first class is an `Employee` parent class with the following properties and methods:
const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js")


const example = new Employee(nerm, id, email);

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name == 'nerm', id and email if provided valid arguments", () => {
            const employee = new Employee("Jerf", "B870943", "Jerf@email.com");

            // expect that the arguments get passed through and create object with all three arguments
            expect(employee.nerm).toEqual("Jerf");
            expect(employee.id).toEqual("B870943");
            expect(employee.email).toEqual("Jerf@email.com");  
        });
        it("should throw an error if name is not a string, email is not a string"), () => {
            // don't mind if id is non-string
            const cb = new Employee(7, 8, 99999)
            const err = new Error("Expected parameter 'name' and 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        }
        it("should throw an error if not provided text", () => {
            // Arrange
            const cb = new Employee();
            const err = new Error(
              "Expected parameter 'text' to be a non empty string"
            );
            const cb = () => todoList.addTodo();
      
            // Assert
            expect(cb).toThrowError(err);
        });
    });
});

// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`

// describe("Arithmetic", () => {
//   describe("Initialization", () => {
//     it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
//       const obj = new Arithmetic();

//       expect("number" in obj).toEqual(true);
//     });

//     it("should set 'number' when created", () => {
//       const num = 108;

//       const obj = new Arithmetic(num);

//       expect(obj.number).toEqual(num);
//     });

//     it("should default 'number' to 0", () => {
//       const obj = new Arithmetic();

//       expect(obj.number).toEqual(0);
//     });
//   });

//   describe("addTodo", () => {
//     // Positive Tests
//     it("should add a new 'Todo' object to its 'todos' array", () => {
//       // Arrange
//       const todoList = new TodoList();
//       const todoText = "Mow Lawn";

//       // Act
//       todoList.addTodo(todoText);

//       // Assert
//       expect(todoList.todos.length).toEqual(1);
//       expect(todoList.todos[0] instanceof Todo).toEqual(true);
//       expect(todoList.todos[0].text).toEqual(todoText);
//     });

//     // Exception test
//     it("should throw an error if not provided text", () => {
//       // Arrange
//       const todoList = new TodoList();
//       const err = new Error(
//         "Expected parameter 'text' to be a non empty string"
//       );
//       const cb = () => todoList.addTodo();

//       // Assert
//       expect(cb).toThrowError(err);
//     });

//     describe("Child", () => {
//         // TODO: Add a comment describing the purpose of the following test suite
      
//         describe("Initialization", () => {
//             // testing if we can create a new child object
//           it("should create an object with a name and age if provided valid arguments", () => {
//             const child = new Child("Sarah", 3);
      
//             // TODO: Add a comment describing the purpose of the following statements
//             // checking to see if the parameters we passed through are attributes of the object
//             expect(child.name).toEqual("Sarah");
//             expect(child.age).toEqual(3);
//           });
      
//           it("should throw an error if provided no arguments", () => {
//             // TODO: Add a comment describing the purpose of the following expression
//             // creating an empty child object
//             const cb = () => new Child();
      
//             // TODO: Add a comment describing the purpose of the following statement
//             // checking to see if empty child object throws an error when passed through (no args!)
//             expect(cb).toThrow();
//           });
      
//           it("should throw an error if not provided an age", () => {
//             const cb = () => new Child("Sarah");
      
//             // TODO: Add a comment describing the purpose of the following declaration
//             const err = new Error("Expected parameter 'age' to be a non-negative number");
//             // has to be a positive number
      
//             // TODO: Add a comment describing the purpose of the following statement
//             expect(cb).toThrowError(err);
//             // if only name is passed though and no age, throw the error ^^ this error specifically not in general
//           });
      
//           it("should throw an error if 'name' is not a string", () => {
//             const cb = () => new Child(3, 2);
//             const err = new Error("Expected parameter 'name' to be a non-empty string");
      
//             expect(cb).toThrowError(err);
//           }); // if err error is thrown when non-string name is passed through--> 3 is not a name
      
//           it("should throw an error if 'age' is not a number", () => {
//             const cb = () => new Child("Sarah", "2");
//             const err = new Error("Expected parameter 'age' to be a non-negative number");
      
//             expect(cb).toThrowError(err);
//           }); // if err error is thrown when non-number number is passed as a number
      
//           it("should throw an error if 'age' is less than 0", () => {
//             const cb = () => new Child("Sarah", -1);
//             const err = new Error("Expected parameter 'age' to be a non-negative number");
      
//             expect(cb).toThrowError(err);
//           }); // if err error is thrown when the age passed is negative
//         });
//       });