const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('check if employee is created', () => {
    const employee = new Employee('Ray', '01', 'ray@gmail.com', 'Boss');

    expect(employee.name).toBe("Ray");
    expect(employee.id).toBe("01");
    expect(employee.email).toBe('ray@gmail.com');
    expect(employee.role).toBe("Boss");
});