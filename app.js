// NPM Modules
const inquirer = require("inquirer");

// Local Modules
const render = require("./lib/htmlrenderer");
const getQuestions = require("./lib/getQuestions");
const getDefaultQuestions = getQuestions.getDefaultQuestions;
const getRoleSpecificQuestion = getQuestions.getRoleSpecificQuestion;

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
const teamMembers = [];

async function buildTeamMembersArray() {
  let addAnother = true;

  while (addAnother) {
    const answers = await inquirer.prompt(getDefaultQuestions());

    switch (answers.role) {
      case 'Manager':
        const { officeNumber } = await inquirer.prompt(getRoleSpecificQuestion('Manager'));
        answers.officeNumber = officeNumber;
        teamMembers.push(new Manager(
          answers.name,
          Number(answers.id),
          answers.email,
          Number(answers.officeNumber)
        ));
        break;
      case 'Engineer':
        const { github } = await inquirer.prompt(getRoleSpecificQuestion('Engineer'));
        answers.github = github;
        teamMembers.push(new Engineer(
          answers.name,
          Number(answers.id),
          answers.email,
          answers.github
        ));
        break;
      case 'Intern':
        const { school } = await inquirer.prompt(getRoleSpecificQuestion('Intern'));
        answers.school = school;
        teamMembers.push(new Intern(
          answers.name,
          Number(answers.id),
          answers.email,
          answers.school
        ));
        break;
    }

    confirm = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another employee?'
      }
    ]);

    addAnother = confirm.addAnother;
  }

  init();
}

buildTeamMembersArray();

async function init() {
  await render(teamMembers);
}


