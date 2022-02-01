const express  = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    console.log(req.acceptsLanguages('en', 'de'));
    res.sendFile(__dirname + "/index.html");
});


app.listen(5000, function(){
    console.log("Server is running");
});