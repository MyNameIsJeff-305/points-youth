const express = require('express');
const { Team } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// Get all teams
router.get('/', async (req, res) => {
    const teams = await Team.findAll();
    return res.json({ teams });
});

// Get a team by ID
router.get('/:id', requireAuth, async (req, res) => {
    const teamId = req.params.id;
    const team = await Team.findByPk(teamId);

    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }

    return res.json({ team });
});

// Create a new team
router.post('/', requireAuth, async (req, res) => {
    const { name, description, logoUrl, score = 0 } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    if (score < 0) {
        return res.status(400).json({ message: 'Score cannot be negative' });
    }
    if (logoUrl && !logoUrl.startsWith('http')) {
        return res.status(400).json({ message: 'Logo URL must be a valid URL' });
    }

    const newTeam = await Team.create({
        name,
        description,
        logoUrl,
        score
    });

    return res.status(201).json({ team: newTeam });
});

// Update a team
router.put('/:id', requireAuth, async (req, res) => {
    const teamId = req.params.id;
    const { name, description, logoUrl, score } = req.body;

    const team = await Team.findByPk(teamId);
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }

    if (name) team.name = name;
    if (description) team.description = description;
    if (logoUrl) team.logoUrl = logoUrl;
    if (score !== undefined) team.score = score;

    await team.save();
    return res.json({ team });
});

// Update the Score of a team
router.put('/:id/score', async (req, res) => {
    const team = await Team.findByPk(req.params.id);
    const { pointsToAdd } = req.body;

    if (!team) return res.status(404).json({ error: 'Team not found' });

    team.score += Number(pointsToAdd);
    await team.save();

    res.json(team);
});

// Add Score to a team
router.post('/:id/score', requireAuth, async (req, res) => {
    const teamId = req.params.id;
    const { score } = req.body;

    if (score === undefined || score < 0) {
        return res.status(400).json({ message: 'Score must be a non-negative number' });
    }

    const team = await Team.findByPk(teamId);
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }

    team.score += score;
    await team.save();

    return res.json({ team });
});

// Substract Score from a team
router.post('/:id/substract-score', requireAuth, async (req, res) => {
    const teamId = req.params.id;
    const { score } = req.body;

    if (score === undefined || score < 0) {
        return res.status(400).json({ message: 'Score must be a non-negative number' });
    }

    const team = await Team.findByPk(teamId);
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }

    if (team.score < score) {
        return res.status(400).json({ message: 'Cannot subtract more score than the team has' });
    }

    team.score -= score;
    await team.save();

    return res.json({ team });
});

// Delete a team
router.delete('/:id', requireAuth, async (req, res) => {
    const teamId = req.params.id;
    const team = await Team.findByPk(teamId);

    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }

    await team.destroy();
    return res.status(204).end();
});

module.exports = router;