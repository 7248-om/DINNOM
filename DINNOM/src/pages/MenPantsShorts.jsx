import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesExpand from '../components/CategoriesExpand';

const MenPantsShorts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/products');
        const menPants = res.data.filter(
          (p) =>
            p.gender.toLowerCase() === 'male' &&
            (p.category.toLowerCase() === 'pants' || p.category.toLowerCase() === 'shorts')
        );
        setProducts(menPants);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  return <CategoriesExpand products={products} />;
};

export default MenPantsShorts;
