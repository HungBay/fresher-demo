const express = require('express');
const mocker = require('connect-api-mocker');
const cors = require('cors');

const port = 8000;

const app = express();
app.use(cors());

/* http://localhost:8000/api/user/t3h */

app.use('/api', mocker('mock-api'));
app.listen(port, () => console.log(`Mocker run on port: ${port}`));
