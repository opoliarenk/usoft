'use strict';

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require("./models");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/routes")(app);

const PORT = process.env.PORT || 8080;

async function start () {
    try {
        await db.sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}
start();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({expected: true}));
