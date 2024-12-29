import express from 'express';
import cors from 'cors';
import filmRoutes from '../routes/filmRoutes';
import userRoutes from '../routes/userRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome on the API Node.js !');
});
app.use(cors());
app.use(express.json());
app.use('/api/films', filmRoutes);
app.use('/api/users', userRoutes);

const PORT = 3000;

(async () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})();

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
