const express = require("express");
const RestaurantesController = require("../controllers/RestaurantesController");
const router = express.Router();

router.get("/restaurantes", RestaurantesController.index);
router.post("/restaurantes", RestaurantesController.store);
router.put("/restaurantes/:id", RestaurantesController.update);
router.delete("/restaurantes/:id", RestaurantesController.destroy);
router.get("/restaurantes/:id", RestaurantesController.show);

module.exports = router;
