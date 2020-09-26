import express from 'express';

const productRouter = require('./routes/products');

const port = 4400;
const app = express();
//making directory public

app.use(express.static('public'));

app.use(productRouter);
app.get('/', (req, res) => {
  res.send('haloo');
});

app.listen(port, () => {
  console.log('server running at ' + port);
});
