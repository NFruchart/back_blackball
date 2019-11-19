// definir les routes
const router = require("express").Router();
const productsController = require('./controller')


router.route("/")
    .get(productsController.getAll)
    .post(productsController.create)

router.route("/:id")
    .get(productsController.get)
    .put(productsController.update)
    .delete(productsController.delete)


module.exports = router