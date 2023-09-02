async function viewDepartment(connection) {
    try {
        const query = "SELECT id, department_name FROM department";
        const [rows] = await connection.execute(query);
        console.table(rows);
    } catch (error) {
        console.error("Error encountered:", error);
    }
}
module.exports = {
    viewDepartments,
};
