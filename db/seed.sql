INSERT INTO employee (id, first_name, last_name, manager_id)
VALUES
(1, "Satoru", "Gojo", NULL),
(2, "Yuji", "Itadori", 1),
(3, "Megumi", "Fushiguro", 1);

INSERT INTO role (id, title, salary, employee_id)
VALUES
(1, "Manager", 60000.00, 1),
(2, "Software Engineer", 55000.00, 2),
(3, "Human Resources", 57000.00, 3);