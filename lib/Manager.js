const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor() {
        super();
        this.role = 'Manager';
        this.officeNumber;
    }

    getOfficeNumber() {
        return new Promise((res, rej) => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'offNum',
                    message: 'Employee office number: ',
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
                this.officeNumber = answer.offNum;
                res(this.officeNumber);
                return this.officeNumber;
            })
            .catch(err => {
                if(err) {
                    rej(err);
                }
            })
        })
    }

}

module.exports = Manager;