import { useState } from 'react';
import useAddProduct from './useAddProduct';
import { Loader } from 'semantic-ui-react';
const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [addProduct, loading, isSuccess] = useAddProduct();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !productName ||
      !description ||
      !price ||
      !category ||
      !countInStock ||
      !rating ||
      !image
    ) {
      setErrorMessage('Please fill in all fields and upload an image');
      return;
    }

    const success = await addProduct({
      productName,
      image,
      description,
      discount,
      price,
      category,
      countInStock,
      rating,
    });

    if (success) {
      setProductName('');
      setDescription('');
      setDiscount(0);
      setPrice(0);
      setCategory('');
      setCountInStock(0);
      setRating(0);
      setImage(null);
      setErrorMessage('');
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        {isSuccess && (
          <div className="alert alert-success">{'Successfully Added...'}</div>
        )}
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            className="form-control"
            id="discount"
            value={discount}
            onChange={(event) => setDiscount(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="countInStock">Count In Stock</label>
          <input
            type="number"
            className="form-control"
            id="countInStock"
            value={countInStock}
            onChange={(event) => setCountInStock(Number(event.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
          />
        </div>
        <label htmlFor="rating">Product Image</label>
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        {loading ? (
          <Loader active inline />
        ) : (
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        )}
      </form>
    </div>
  );
};
export default AddProductForm;
