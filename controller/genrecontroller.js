const db = require('../models');const db = require('../models');

async function getAllGenre(req, res) {
    try {
        const genre = await db.Genre.findAll();
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error fetching genre:', err.message);
        res.status(500).json({ error: 'Failed to fetch genre' });
    }
}

async function getGenreById(req, res) {
    const { id } = req.params;
    try {
        const genre = await db.Genre.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error fetching genre by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch genre by ID' });
    }
}

async function createGenre(req, res) {
    const { name, description } = req.body;
    try {
        const newGenre = await db.Genre.create({ name, description });
        res.status(201).json(newGenre);
    } catch (err) {
        console.error('Error creating genre:', err.message);
        res.status(500).json({ error: 'Failed to create genre' });
    }
}