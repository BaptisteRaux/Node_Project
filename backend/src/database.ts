import { Pool } from 'pg';

// Configuration de la base de données
const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'node_project',
    password: 'node_password',
    port: 5432,
});

export default pool;
