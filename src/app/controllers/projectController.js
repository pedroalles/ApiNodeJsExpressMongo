const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project.js');
const Task = require('../models/tasks.js');

const router = express.Router();
router.use(authMiddleware);

router.get('/', async (req, res) => {
    res.send({user: req.userId});
});

router.get('/:projectId', async (req, res) => {
    res.send({user: req.userId});
});

router.post('/', async (req, res) => {
    res.send({ ok:true, user: req.userId});
});

router.put('/:projectId', async (req, res) => {
    res.send({user: req.userId});
});

router.delete('/:projectId', async (req, res) => {
    res.send({user: req.userId});
});

module.exports = app => app.use('/projects', router);
