const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const teamsRouter = require('./teams.js');
const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/teams', teamsRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;