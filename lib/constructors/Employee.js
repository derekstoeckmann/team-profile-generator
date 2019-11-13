/**
 * Class representing a Employee
 * @class
 */
class Employee {
  /**
   * Create a Employee.
   * @param {string} name - Name of the Employee
   * @param {number} id - ID of the Employee
   * @param {string} email - Email of the Employee
   */
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getRole() {
    return 'Employee';
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
}

module.exports = Employee;
