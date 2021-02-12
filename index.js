const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engingeer = require('./lib/Engineer.js');
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
        switch (answer) {
            case "Manager":
                console.log('Manager');
            case "Engineer":
                console.log('Engineer');
            case "Intern":
                console.log('Intern');
        }
    })
}






