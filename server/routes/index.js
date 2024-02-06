const express = require('express');
const userRoutes = require('./api/user-routes');

const router = express.Router();

router.use('/api/user', userRoutes);

module.exports = router;