// Delete an employee
router.delete('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employee.destroy();
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employee' });
    }
});
