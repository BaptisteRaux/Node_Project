import { Router } from 'express';
import { Film } from '../models';

const router = Router();

router.get('/', async (req, res) => {
    const films = await Film.findAll();
    res.json(films);
});

router.post('/', async (req, res) => {
    const newFilm = await Film.create(req.body);
    res.json(newFilm);
});

export default router;
