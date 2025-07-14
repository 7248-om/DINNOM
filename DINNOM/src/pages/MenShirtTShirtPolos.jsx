import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// ✅ Updated import paths from 1_shirt_tshirt_polo → 1shirts
import ms1a from '../assets/Men/1shirts/ms1a.png';
import ms1b from '../assets/Men/1shirts/ms1b.png';
import ms2a from '../assets/Men/1shirts/ms2a.png';
import ms2b from '../assets/Men/1shirts/ms2b.png';
import ms3a from '../assets/Men/1shirts/ms3a.png';
import ms3b from '../assets/Men/1shirts/ms3b.png';
import ms4a from '../assets/Men/1shirts/ms4a.png';
import ms4b from '../assets/Men/1shirts/ms4b.png';
import ms5a from '../assets/Men/1shirts/ms5a.png';
import ms5b from '../assets/Men/1shirts/ms5b.png';
import ms6a from '../assets/Men/1shirts/ms6a.png';
import ms6b from '../assets/Men/1shirts/ms6b.png';
import ms7a from '../assets/Men/1shirts/ms7a.png';
import ms7b from '../assets/Men/1shirts/ms7b.png';
import ms8a from '../assets/Men/1shirts/ms8a.png';
import ms8b from '../assets/Men/1shirts/ms8b.png';
import ms9a from '../assets/Men/1shirts/ms9a.png';
import ms9b from '../assets/Men/1shirts/ms9b.png';
import ms10a from '../assets/Men/1shirts/ms10a.png';
import ms10b from '../assets/Men/1shirts/ms10b.png';
import ms11a from '../assets/Men/1shirts/ms11a.png';
import ms11b from '../assets/Men/1shirts/ms11b.png';

const menShirtsPolos = [
  { id: 1, name: 'Slim-Fit Oxford Shirt', price: 1890, image: ms1a, hoverImage: ms1b },
  { id: 2, name: 'Checked Flannel Shirt', price: 1990, image: ms2a, hoverImage: ms2b },
  { id: 3, name: 'Crew-Neck Cotton T-Shirt', price: 990, image: ms3a, hoverImage: ms3b },
  { id: 4, name: 'Oversized Graphic Tee', price: 1290, image: ms4a, hoverImage: ms4b },
  { id: 5, name: 'Classic Piqué Polo Shirt', price: 1490, image: ms5a, hoverImage: ms5b },
  { id: 6, name: 'Tipped Collar Polo', price: 1590, image: ms6a, hoverImage: ms6b },
  { id: 7, name: 'Denim Button-Up Shirt', price: 2190, image: ms7a, hoverImage: ms7b },
  { id: 8, name: 'Relaxed Linen Shirt', price: 2490, image: ms8a, hoverImage: ms8b },
  { id: 9, name: 'Stretch Slim Fit Tee', price: 1190, image: ms9a, hoverImage: ms9b },
  { id: 10, name: 'Athletic Raglan T-Shirt', price: 1390, image: ms10a, hoverImage: ms10b },
  { id: 11, name: 'Color-Block Polo Shirt', price: 1790, image: ms11a, hoverImage: ms11b },
];

const MenShirtsPolos = () => {
  return <CategoriesExpand products={menShirtsPolos} />;
};

export default MenShirtsPolos;
