const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test("check if user input works for employee class", () => {
    const employee = new Employee();
    
    employee.getName().then(() => {
        expect(employee.name).toEqual(expect.any(String));
    });
    employee.getId().then(() => {
        expect(employee.id).toEqual(expect.any(String));
    });
    employee.getEmail().then(() => {
        expect(employee.email).toEqual(expect.any(String));
    });
})