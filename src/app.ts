import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('### Express :', port);
});