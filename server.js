const express = require('express')


let app = express();

app.use(express.static(__dirname + '/./public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



let port = 3002;

app.listen(port, () => {
    console.log('Listening on port: ' + port)
})