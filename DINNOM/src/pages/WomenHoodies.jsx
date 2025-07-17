import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesExpand from '../components/CategoriesExpand';

const WomenHoodies = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/products');
        const womenHoodies = res.data.filter(
          (p) =>
            p.gender.toLowerCase() === 'female' &&
            p.category.toLowerCase() === 'sweatshirts'
        );
        setProducts(womenHoodies);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  return <CategoriesExpand products={products} />;
};

export default WomenHoodies;
