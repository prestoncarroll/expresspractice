const express = require("express");
var request = require("request");



const app = express()
const port = 4000

app.get("/", (req, res) => res.send('Hello World!'))
app.get("/names", (req, res) => res.send('preston julia baby'))


app.get("/getweathertoronto"), (req, res) => {
    request(
        "http://api.weatherstack.com/current?access_key=f431fbf6e41eef56fab3f9d11033d017&query=Toronto", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
        }
    );
};

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))