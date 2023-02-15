import Product from "../model/product.model.js";

const addProducts = (req, res) => {
  Product.insertMany(req.body, (err, data) => {
    if (err) {
      res.status(500).send(`Error in addProduct 500 ${err}`);
    } else {
      res.status(200).send(data);
    }
  });
};

export { addProducts };

const getProducts = (req, res) => {
  Product.find((err, data) => {
    if (err) {
      res.status(500).send("Error in getProducts 500 {err}");
    } else {
      res.status(200).send(data);
    }
  });
};

export { getProducts };
