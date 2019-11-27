const router = reuire("express").Router();
const postRoutes = require("./post");

//Post routes
router.use("/post", postRoutes);

module.exports = router;
