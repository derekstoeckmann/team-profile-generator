const getDefaultQuestions = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is your role?',
      choices: [
        'Manager',
        'Engineer',
        'Intern'
      ]
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is your ID number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    }
  ];

  return questions;
};

const getRoleSpecificQuestion = role => {
  const question = [];

  switch (role) {
    case 'Manager':
      question.push(
        {
          type: 'number',
          name: 'officeNumber',
          message: 'What is your office number?'
        }
      );
      break;
    case 'Engineer':
      question.push(
        {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?'
        }
      );
      break;
    case 'Intern':
      question.push(
        {
          type: 'input',
          name: 'school',
          message: 'What is your school?'
        }
      );
      break;
  }

  return question;
}

module.exports = {
  getDefaultQuestions,
  getRoleSpecificQuestion
};