import express from 'express';

const port = 4400;
const app = express();

app.get('/', (req, res) => {
  res.send('haloo');
});

app.listen(port, () => {
  console.log('server running at ' + port);
});
