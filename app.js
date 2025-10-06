const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');

app.use(cookieParser());

app.get("/", ( req, res) => {
    let token = jwt.sign({ email: "omkar@test.com" }, "secret");
    res.cookie("token", token);
    res.send("Cookie has been set");
});

app.get("/read", (req, res ) => {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    
})

app.listen(3000);