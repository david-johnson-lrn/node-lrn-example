let express = require("express");
let path = require('path')
let routes = require('./routes')
let app = express();

let PORT = 8888;

app.use(routes);

app.get("/author", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/authorAPI.html"), function (err) {
        if (err)
            throw err
    })
})

//Sends a standard index.html
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"), function (err) {
        if (err)
            throw err
    })
})

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}. Open localhost:${PORT} to use Author API`);
});