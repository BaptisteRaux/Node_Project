import { Router } from 'express';
import { User } from '../models';

const router = Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});

export default router;
