require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CodeModel = require("./models/Code");

const cors = require("cors");
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONN_STR);

// Endpoint for checking the right code from backend
app.get("/checkCode", (req, res) => {
    let inputPassCode = req.query.inputPassCode;
    CodeModel.find({ passcode: inputPassCode }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Server running")
});

