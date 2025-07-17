import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesExpand from '../components/CategoriesExpand';

const MenHoodies = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/products');
        const hoodies = res.data.filter(
          (p) =>
            p.gender.toLowerCase() === 'male' &&
            p.category.toLowerCase() === 'hoodies'
        );
        setProducts(hoodies);
      } catch (err) {
        console.error('Error fetching hoodies:', err);
      }
    };

    fetchProducts();
  }, []);

  return <CategoriesExpand products={products} />;
};

export default MenHoodies;
