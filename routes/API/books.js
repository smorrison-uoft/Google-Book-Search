const router = require ("express").Router();
const bookController = require("../../controllers/bookController");


router.route("/")
.get(bookController.findAll)
.post(booksController.create);

router.route("/:id")
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove);


module.exports = router;