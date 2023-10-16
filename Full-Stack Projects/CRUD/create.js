const express = require('express');
const { Employee, Contact } = require('./models'); // Your Sequelize models
const router = express.Router();

// Create an employee with multiple contact details
router.post('/employees', async (req, res) => {
    try {
        const { fullName, jobTitle, phoneNumber, email, address, emergencyContacts } = req.body;

        // Create the employee
        const employee = await Employee.create({
            fullName,
            jobTitle,
            phoneNumber,
            email,
            address,
        });

        // Create contact details associated with the employee
        for (const contactInfo of emergencyContacts) {
            await Contact.create({
                ...contactInfo,
                EmployeeId: employee.id, // Associate contact with the employee
            });
        }

        res.status(201).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating employee' });
    }
});

module.exports = router;
