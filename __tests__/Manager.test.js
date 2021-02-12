const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('check if manager returns office number and role', () => {
    const man = new Manager();
    expect(man.role).toBe('Manager');

    man.getOfficeNumber()
    .then(data => {
        expect(man.officeNumber).toEqual(expect.any(String));
    });
})