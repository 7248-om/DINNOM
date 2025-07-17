import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesExpand from '../components/CategoriesExpand';

const MenShirtTShirtPolos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/products');
        const menShirts = res.data.filter(
          (p) =>
            p.gender?.toLowerCase() === 'male' &&
            p.category?.toLowerCase() === 'shirts'
        );
        setProducts(menShirts);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  return <CategoriesExpand products={products} />;
};

export default MenShirtTShirtPolos;
