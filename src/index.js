const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/mila/', (req, res) => {
    res.send("camilinha");
})

require('./app/controllers/index')(app);

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
});