const inquirer = require('inquirer');
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor() {
        super();
        this.role = 'Engineer';
        this.github;
    }

    getGithub() {
        return new Promise((res, rej) => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Employee github: ',
                    validate: answer => {
                        if(answer) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(answer => {
                this.github = answer.name;
                res(this.github);
                return this.github;
            })
            .catch(err => {
                if(err) {
                    rej(err);
                }
            })
        })
    }
}

module.exports = Engineer