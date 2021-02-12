const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor() {
        super();
        this.role = 'Intern';
        this.school;
    }

    getSchool() {
        return new Promise((res, rej) => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Employee school: ',
                    validate: answer => {
                        if(answer) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            ])
            .then(answer => {
                this.school = answer.school;
                res(this.school)
                return this.school;
            })
            .catch(err => {
                if (err) {
                    rej(err);
                }
            })
        })
    }
}

module.exports = Intern;