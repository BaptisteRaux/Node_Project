import { Request, Response } from 'express';
import * as userService from './services/userService';
import asyncHandler from './middleware/asyncHandler';

// Récupérer tous les utilisateurs
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
});

// Récupérer un utilisateur par son ID
export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
});

// Créer un nouvel utilisateur
export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    const newUser = await userService.createUser(name, email, age);
    res.status(201).json(newUser);
});

// Mettre à jour un utilisateur existant
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updatedUser = await userService.updateUser(Number(id), name, email, age);
    if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedUser);
});

// Supprimer un utilisateur
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(Number(id));
    if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
});
