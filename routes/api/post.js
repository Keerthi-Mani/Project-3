const router = require("express").Router();
const userpostcontrollers = require("../../controllers/userpostcontrollers");

//Matches with "/api/post"
router
  .route("/")
  .get(userpostcontrollers.findAll)
  .post(userpostcontrollers.create);

//
//Matches with "/api/post/:id"
router
  .route("/:id")
  .get(userpostcontrollers.findById)
  .put(userpostcontrollers.update)
  .delete(userpostcontrollers.remove);
module.exports = router;
