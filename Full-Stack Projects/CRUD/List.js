// List employees with pagination
router.get('/employees', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 10;

        const employees = await Employee.findAndCountAll({
            limit: pageSize,
            offset: (page - 1) * pageSize,
            include: Contact, // Include associated contact details
        });

        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error listing employees' });
    }
});
