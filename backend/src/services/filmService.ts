import pool from '../database';

export const getMovies = async () => {
    const result = await pool.query('SELECT * FROM movies');
    return result.rows;
};

export const getMovieById = async (id: number) => {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
    return result.rows[0] || null;
};

export const createMovie = async (title: string, director: string, release_date: string, genre: string) => {
    const result = await pool.query(
        'INSERT INTO movies (title, director, release_date, genre) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, director, release_date, genre]
    );
    return result.rows[0];
};

export const updateMovie = async (id: number, title: string, director: string, release_date: string, genre: string) => {
    const result = await pool.query(
        'UPDATE movies SET title = $1, director = $2, release_date = $3, genre = $4 WHERE id = $5 RETURNING *',
        [title, director, release_date, genre, id]
    );
    return result.rows[0] || null;
};

export const deleteMovie = async (id: number) => {
    const result = await pool.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
};
