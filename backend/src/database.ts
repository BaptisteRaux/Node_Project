import { Pool } from 'pg';

// Configuration de la base de données
const pool = new Pool({
    user: 'node_user',           // Utilisateur PostgreSQL
    host: 'localhost',           // Serveur de base de données
    database: 'node_project',    // Nom de la base de données
    password: 'node_password',   // Mot de passe
    port: 5432,                  // Port PostgreSQL (par défaut : 5432)
});

export default pool;
