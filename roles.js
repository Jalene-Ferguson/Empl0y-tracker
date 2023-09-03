async function viewRole(connection) {
    try {
        const query = `
        SELECT role_id, role_title, role_salary, department.department_name AS department
        FROM role 
        INNER JOIN department ON role.department_id = department.id
        `;
        const [rows] = await connection.execute(query);
        console.table(rows);
    } catch (error) {
        console.error("Error encountered:", error);
    }
}

async function addRole(connection, title, salary, departmentId) {
    try {
        const query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        await connection.execute(query, [title, salary, departmentId]);
        console.log(`Role "${title}" added successfully.`);
    } catch (error) {
        console.error("Error encountered", error);
    }
} 

module.exports = {
    viewRole,
    addRole,
};