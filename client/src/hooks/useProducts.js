import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProducts, setCategories } from "../store/slices/productSlice";
import apiClient from "../services/api-service";

const useProducts = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.product.isLoaded);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);

        const res = await apiClient.get(`/products`);

        dispatch(setProducts(res.data.products));
        dispatch(setCategories(res.data.categories));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!isLoaded) {
        fetchAllProducts();
    }
  }, [dispatch, isLoaded]);

  return { loading }
};

export default useProducts;
