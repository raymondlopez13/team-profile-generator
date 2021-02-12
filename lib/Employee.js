const inquirer = require('inquirer');


class Employee {
    constructor() {
        this.role;
        this.name;
        this.id;
        this.email;
    }
    getName() {
        return new Promise((res, rej) => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Employee name: ',
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
                this.name = answer.name;
                res(this.name);
                return this.name;
            })
            .catch(err => {
                if (err) {
                    rej(err);
                }
            })
        })
    }

    getId() {
        return new Promise((res, rej) => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Employee ID: ',
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
                this.id = answer.id;
                res(this.id);
                return this.id;
            })
            .catch(err => {
                if (err) {
                    rej(err);
                }
            })
        })
    }

    getEmail() {
        return new Promise((res, rej) => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'Employee email: ',
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
                this.email = answer.email;
                res(this.email)
                return this.email;
            })
            .catch(err => {
                if (err) {
                    rej(err);
                }
            })
        })
    }


    getRole() {
        return 'Employee';
    }
    
    returnObj() {
        return this;
    }
}

module.exports = Employee;