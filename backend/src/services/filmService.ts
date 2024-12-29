import db from '../database';

// Récupérer tous les films
export const getMovies = async () => {
    const result = await db.query('SELECT * FROM movies');
    return result.rows;
};

// Récupérer un film par son ID
export const getMovieById = async (id: number) => {
    const result = await db.query('SELECT * FROM movies WHERE id = $1', [id]);
    return result.rows[0];
};

// Créer un nouveau film
export const createMovie = async (title: string, director: string | null, release_date: string | null, genre: string | null, rating: number) => {
    const result = await db.query(
        `INSERT INTO movies (title, director, release_date, genre, rating)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [title, director, release_date, genre, rating]
    );
    return result.rows[0];
};

// Mettre à jour un film existant
export const updateMovie = async (id: number, title: string, director: string | null, release_date: string | null, genre: string | null, rating: number) => {
    const result = await db.query(
        `UPDATE movies
         SET title = $1, director = $2, release_date = $3, genre = $4, rating = $5
         WHERE id = $6
         RETURNING *`,
        [title, director, release_date, genre, rating, id]
    );
    return result.rows[0];
};

// Supprimer un film
export const deleteMovie = async (id: number) => {
    const result = await db.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
