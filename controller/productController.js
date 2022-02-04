const Product = require("../model/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Update lead

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).json({
        success: false,
        message: 'Product not found',
      });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).json({
        success: false,
        message: 'Product not found',
      });
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

//get all products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  res.status(201).json({
    success: true,
    products,
  });
});

//get single lead
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(201).json({
    success: true,
    product,
  });
});

