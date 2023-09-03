async function viewEmployee(connection) {
    try {
        const query = `
        SELECT employee.id, employee.first_name, employee.last_name, 
        role.title AS job_title, role,salary, 
        CONCAT(manager.first_name, " ", manager.last_name) AS manager_name, 
        department.department_name AS department 
        FROM employee 
        INNER JOIN role ON employee.role_id = role.id 
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id 
        INNER JOIN department ON role.department_id = department.id
        `;
        const [rows] = await connection.execute(query);
        console.table(rows);
    } catch (error) {
        console.error("Error encountered", error);
    }
}

async function addEmployee(connection, firstName, lastName, roleId, managerId) {
    try {
      const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
      await connection.execute(query, [firstName, lastName, roleId, managerId]);
      console.log(`Employee "${firstName} ${lastName}" added successfully.`);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  }

  async function updateEmployeeRole(connection, employeeId, newRoleId) {
    try {
        const query = "UPDATE employee SET role_id = ? WHERE id = ?";
        await connection.execute(query, [newRoleId, employeeId]);
        console.log("Employee role updated.");
    } catch (error) {
        console.error("Error encountered updating this role.", error);
    }
  }

  module.exports = {
    viewEmployee,
    addEmployee,
    updateEmployeeRole,
  };