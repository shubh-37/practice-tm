const express = require("express");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getATask).patch(updateTask).delete(deleteTask);


module.exports = router;