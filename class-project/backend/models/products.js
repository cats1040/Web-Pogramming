import mongoose from "mongoose";

// defining schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
});

// creating model
const ProductModel = mongoose.model("Products", productSchema);

// These are methods provided by mongoose model
// ProductModel.find();
// ProductModel.findById();
// ProductModel.updateOne();
// ProductModel.deleteOne();
// ProductModel.insert();

// mongoose provides interface for mongodb queries only.
// developer code -> mongoose queries -> mongodb methods (do data type conversion, json -> bson) -> mongodb server

/**
 * Why using callback function?
 * route -> authentication -> validation -> processing
 * route <- authentication <- validation <- processing
 *
 */
ProductModel.getAllProducts = async function (successCallback, errorCallback) {
  try {
    const data = await ProductModel.find();
    console.log("data from db: ", data);
    successCallback(data);
  } catch (error) {
    console.error("Error fetching products: ", error?.message);
    errorCallback(error);
  }
};

ProductModel.addNewProduct = async function (
  newProduct,
  successCallback,
  errorCallback
) {
  try {
    const createdProduct = new ProductModel(newProduct);
    await createdProduct.save();
    successCallback(createdProduct);
  } catch (error) {
    console.error("Error adding new product: ", error?.message);
    errorCallback(error);
  }
};

ProductModel.updateProductById = async (id, updatedData) => {
  const result = await ProductModel.updateOne(
    { _id: id },
    { $set: updatedData }
  );
  return result;
};

ProductModel.deleteProductById = async (id) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

export default ProductModel;
