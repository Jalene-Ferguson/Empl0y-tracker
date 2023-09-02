async function viewRoles(connection) {
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

