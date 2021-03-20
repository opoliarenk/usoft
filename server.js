// const express = require("express");
// const bodyParser = require("body-parser");
// // const sequelize = require('./db/db');
//
// const authRouter = require('./endpoints/authent');
// const usersRouter = require('./endpoints/user');
// const postRouter = require('./endpoints/post');
// const categoriesRouter = require('./endpoints/categories');
// const commentsRouter = require('./endpoints/comments');
//
// const app = express();
//
// const PORT = process.env.PORT || 8080;
//
// async function start () {
//     try {
//         // await sequelize.sync()
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }
// start();
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({expected: true}));
// app.use('/api/auth', authRouter);
// app.use('/api/users', usersRouter);
// app.use('/api/post', postRouter);
// app.use('/api/categories', categoriesRouter);
// app.use('/api/comments', commentsRouter);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require("./models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
