const getDefaultQuestions = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: name => {
        if (name.trim().length === 0) {
          return "Expected parameter 'name' to be a non-empty string";
        }

        return true;
      }
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
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
      validate: id => {
        if (isNaN(Number(id)) || Number(id) < 0) {
          return "Expected parameter 'id' to be a non-negative number.";
        }

        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      validate: email => {
        const valid = /\S+@\S+\.\S+/.test(email);

        if (!valid) {
          return "Please enter a valid email address.";
        }

        return true;
      }
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
          type: 'input',
          name: 'officeNumber',
          message: 'What is your office number?',
          validate: id => {
            if (isNaN(Number(id)) || Number(id) < 0) {
              return "Expected parameter 'officeNumber' to be a non-negative number.";
            }

            return true;
          }
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