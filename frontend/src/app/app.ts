import express from 'express';
import { Request, Response} from 'express';

const app = express();
app.use(express.json()); // => to parse request body with http header "content-type": "application/json"

app.get('/api/liveness', (req: Request, res: Response) => {
  res.send('OK !!!');
});

console.log('starting...');
app.listen(3000, () => {
  console.log('Ok, started port 3000, please open http://localhost:3000/swagger-ui');
});
