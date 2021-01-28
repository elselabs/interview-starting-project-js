const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json({}));
app.use(cors());
const PORT = 3001;

app.get('/', (req, res) => {
  return res.status(200).send();
});

app.post('/', (req, res) => {
    return res.status(200).send();
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));