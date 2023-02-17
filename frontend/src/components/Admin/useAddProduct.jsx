import { useState } from 'react';
import axios from '../../axios';
const useAddProduct = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addProduct = async (productData) => {
    setLoading(true);
    setIsSuccess(false);
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }

    try {
      await axios
        .post('/products', formData)
        .then((data) => setIsSuccess(true))
        .catch((error) => setErrorMessage(error))
        .finally(() => setLoading(false));
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
     return true;
    } catch (error) {
      setErrorMessage(`Error adding product: ${error.message}`);
      return false;
    }
  };

  return [addProduct, loading, isSuccess];
};

export default useAddProduct;
