const express = require("express");
const router = express.Router();

const MongoDB = require("../models/mongo");

var connection = new MongoDB("whatsapp","users",process.env.MONGO_CONNECTION_STRING);


router.get("/user", (req,res) => {
    const { userID } = req.params;
    const query = req.query;
    connection.find({"_id":query.phone}).then((result) => {
        res.status(200).send(result);
    });
});

module.exports = router;