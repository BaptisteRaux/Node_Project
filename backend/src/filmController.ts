import { Request, Response } from 'express';
import * as movieService from './services/filmService';
import asyncHandler from './middleware/asyncHandler';

export const getMovies = asyncHandler(async (req: Request, res: Response) => {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
});

export const getMovieById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const movie = await movieService.getMovieById(Number(id));
    if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
});

export const createMovie = asyncHandler(async (req: Request, res: Response) => {
    const { title, director, release_date, genre, rating } = req.body;
    const newMovie = await movieService.createMovie(title, director, release_date, genre, rating);
    res.status(201).json(newMovie);
});

export const updateMovie = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, director, release_date, genre, rating } = req.body;
    const updatedMovie = await movieService.updateMovie(Number(id), title, director, release_date, genre, rating);
    if (!updatedMovie) {
        return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
});

export const deleteMovie = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedMovie = await movieService.deleteMovie(Number(id));
    if (!deletedMovie) {
        return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
});