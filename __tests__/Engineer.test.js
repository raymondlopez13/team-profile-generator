const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('check if engineer outputs correct data', () => {
    const eng = new Engineer();

    eng.getGithub()
    .then(data => {
        expect(eng.github).toEqual(expect.any(String));
        expect(eng.role).toBe('Engineer');
    });

    
});