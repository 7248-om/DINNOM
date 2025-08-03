import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesExpand from '../components/CategoriesExpand';

const WomenPants = () => {
  const [products, setProducts] = useState([]);
//f3f
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/products');
        const filtered = res.data.filter(
          (p) =>
            p.gender.toLowerCase() === 'female' &&
            p.category.toLowerCase() === 'pants and skirts'
        );
        setProducts(filtered);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  return <CategoriesExpand products={products} />;
};

export default WomenPants;
