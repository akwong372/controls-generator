const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('we up!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Controls Generator is listening on ${PORT}`);
});
