import Product from "../model/product.model.js";

const addProducts = async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(`Error in addProducts: ${error.message}`);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(`Error in getProducts: ${error.message}`);
  }
};

export { addProducts, getProducts };