// Update an employee
router.put('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEmployeeData = req.body;

        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employee.update(updatedEmployeeData);
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating employee' });
    }
});
