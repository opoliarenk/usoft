module.exports = app => {
    const tutorials = require("../controllers/controller.js");

    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/auth/register", tutorials.register);

    // // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);
    //
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    //
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
    //
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    //
    // // Delete a Tutorial with id
    router.delete("/auth/:id", tutorials.delete);
    //
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);

    app.use('/api', router);
};