const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
} = require("../controller/productController");

const router = express.Router();

router.route("/product/create").post(createProduct);
router.route("/products").get(getProducts);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);

module.exports = router;
