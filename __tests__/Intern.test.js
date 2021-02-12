const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern.js');

test('checks if Intern school', () => {
    const int = new Intern();

    int.getSchool().then(data => {
        expect(int.school).toEqual(expect.any(String));
        expect(int.role).toBe('Intern');
    })
});