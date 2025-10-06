const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(cookieParser());

app.get("/", ( req, res) => {
    bcrypt.compare("Omkar123", "$2b$10$CrEMQWNbovU9BORwWCSX7.YqS1.5rL5Mfr/U4.ehp/KO2.hjc4uUK", function(err, result) {
    console.log(result);
    
});

res.send("Done");
});


app.listen(3000);