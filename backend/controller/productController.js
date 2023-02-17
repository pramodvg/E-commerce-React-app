import Product from "../model/product.model.js";
import { upload } from "../utils/uploads.js";
const addProducts = async (req, res) => {
  try {
    await upload.single('image')(req, res, function (err) {
      if (err) {
        return res.status(400).send(`Error in registeredUser: ${err.message}`);
      }

      // Get the product data from the request body
      const { productName, description, discount, price, category, countInStock, rating } = req.body;

      // Create a new product object with the product data and the filename of the uploaded image
      const product = new Product({
        productName,
        description,
        discount,
        price,
        image: req.file.filename,
        category,
        countInStock,
        rating
      });

      const products = product.save();
      setTimeout(() => {
        res.status(200).send({});

      }, 2000);
    });

  } catch (error) {
    res.status(500).send(`Error in addProducts: ${error.message}`);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    setTimeout(() => {
      res.status(200).send(products);
    }, 1000);
  } catch (error) {
    res.status(500).send(`Error in getProducts: ${error.message}`);
  }
};

export { addProducts, getProducts };