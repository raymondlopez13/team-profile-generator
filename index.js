const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const generatePage = require('./src/generatePage.js');
const employeeArr = [];


function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What kind of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then(answer => {
        switch (answer.role) {
            case "Manager":
                manager();
                break;
            case "Engineer":
                engineer();
                break;
            case "Intern":
                intern();
                break;
        }
    })
    .catch(err => {
        if(err) {
            throw err;
        }
    })
}

function manager() {
    const man = new Manager();
    man.getName()
    .then(a => {
        man.getEmail()
        .then(a => {
            man.getId()
            .then(a => {
                man.getOfficeNumber()
                .then(a => {
                    employeeArr.push(man.returnObj());
                    addEmployee();
                })
            })
        })
    }); 
}

function engineer() {
    const eng = new Engineer();
    eng.getName()
    .then(a => {
        eng.getEmail()
        .then(a => {
            eng.getId()
            .then(a => {
                eng.getGithub()
                .then(a => {
                    employeeArr.push(eng.returnObj());
                    addEmployee();
                })
            })
        })
    });
}

function intern() {
    const man = new Intern();
    man.getName()
    .then(a => {
        man.getEmail()
        .then(a => {
            man.getId()
            .then(a => {
                man.getSchool()
                .then(a => {
                    employeeArr.push(man.returnObj());
                    addEmployee();
                })
            })
        })
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee?',
            choices: ['Add Employee', 'Generate Team Profile']
        }
    ])
    .then(answer => {
        if (answer.add === 'Add Employee') {
            start();
        } else {
            generateWebpage();
        }
    })
}

function generateWebpage() {
    const page = generatePage(employeeArr);
    fs.writeFile('./dist/index.html', page, err => {
        if(err) throw err;

        console.log("File has been created!");
    })
}

start();