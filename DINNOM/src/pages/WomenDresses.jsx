import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesExpand from '../components/CategoriesExpand';

const WomenDresses = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/products');
        const womenDresses = res.data.filter(
          (p) =>
            p.gender.toLowerCase() === 'female' &&
            (p.category.toLowerCase() === 'dresses' ||
             p.category.toLowerCase() === 'jumpsuits')
        );
        setProducts(womenDresses);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  return <CategoriesExpand products={products} />;
};

export default WomenDresses;
