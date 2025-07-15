import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const menHoodies = [
  {
    id: 1,
    name: 'Zip-Up Urban Hoodie',
    price: 2700,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj1a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj1b.png?alt=media&token=your-token-here',
  },
  {
    id: 2,
    name: 'Heavyweight Pullover Hoodie',
    price: 3000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj2a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj2b.png?alt=media&token=your-token-here',
  },
  {
    id: 3,
    name: 'Everyday Basic Hoodie',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj3a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj3b.png?alt=media&token=your-token-here',
  },
  {
    id: 4,
    name: 'Quilted Bomber Jacket',
    price: 3200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj4a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj4b.png?alt=media&token=your-token-here',
  },
  {
    id: 5,
    name: 'Varsity Style Jacket',
    price: 3400,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj5a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj5b.png?alt=media&token=your-token-here',
  },
  {
    id: 6,
    name: 'Color Block Street Hoodie',
    price: 2600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj6a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj6b.png?alt=media&token=your-token-here',
  },
  {
    id: 7,
    name: 'Fleece-Lined Zip Hoodie',
    price: 3100,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj7a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj7b.png?alt=media&token=your-token-here',
  },
  {
    id: 8,
    name: 'Athleisure Full-Zip Hoodie',
    price: 2900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj8a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F3sweatshirts%2Fmj8b.png?alt=media&token=your-token-here',
  },
];

const MenHoodies = () => {
  return <CategoriesExpand products={menHoodies} />;
};

export default MenHoodies;
