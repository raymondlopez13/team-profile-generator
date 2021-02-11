const inquirer = require('inquirer');


class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = '';
    }
    getName() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Employee name?',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log('Enter employee name!');
                        return false;
                    }
                }
            }
        ])
        .then(name => {return name;})
        .catch(err => {throw err;});
    };
    getEmail() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: 'Employee email: ',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log('Enter employee email!');
                        return false;
                    }
                }
            }
        ])
        .then(email => {return email;})
        .catch(err => {throw err;});
    }
    getId() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Employee id',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log('Enter employee id!');
                        return false;
                    }
                }
            }
        ])
        .then(name => {return name;})
        .catch(err => {throw err;});
    }
    getRole() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Employee role:',
                choices: ['Manager', 'Engineer', 'Intern'],
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log('Enter employee role!');
                        return false;
                    }
                }
            }
        ])
        .then(name => {return name;})
        .catch(err => {throw err;});
    }
}

module.exports = Employee;