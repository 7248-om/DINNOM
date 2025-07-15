import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const menShirtsPolos = [
  {
    id: 1,
    name: 'Slim-Fit Oxford Shirt',
    price: 1890,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms1a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms1b.png?alt=media&token=your-token-here',
  },
  {
    id: 2,
    name: 'Checked Flannel Shirt',
    price: 1990,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms2a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms2b.png?alt=media&token=your-token-here',
  },
  {
    id: 3,
    name: 'Crew-Neck Cotton T-Shirt',
    price: 990,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms3a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms3b.png?alt=media&token=your-token-here',
  },
  {
    id: 4,
    name: 'Oversized Graphic Tee',
    price: 1290,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms4a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms4b.png?alt=media&token=your-token-here',
  },
  {
    id: 5,
    name: 'Classic Piqué Polo Shirt',
    price: 1490,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms5a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms5b.png?alt=media&token=your-token-here',
  },
  {
    id: 6,
    name: 'Tipped Collar Polo',
    price: 1590,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms6a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms6b.png?alt=media&token=your-token-here',
  },
  {
    id: 7,
    name: 'Denim Button-Up Shirt',
    price: 2190,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms7a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms7b.png?alt=media&token=your-token-here',
  },
  {
    id: 8,
    name: 'Relaxed Linen Shirt',
    price: 2490,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms8a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms8b.png?alt=media&token=your-token-here',
  },
  {
    id: 9,
    name: 'Stretch Slim Fit Tee',
    price: 1190,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms9a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms9b.png?alt=media&token=your-token-here',
  },
  {
    id: 10,
    name: 'Athletic Raglan T-Shirt',
    price: 1390,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms10a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms10b.png?alt=media&token=your-token-here',
  },
  {
    id: 11,
    name: 'Color-Block Polo Shirt',
    price: 1790,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms11a.png?alt=media&token=your-token-here',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F1shirts%2Fms11b.png?alt=media&token=your-token-here',
  },
];

const MenShirtsPolos = () => {
  return <CategoriesExpand products={menShirtsPolos} />;
};

export default MenShirtsPolos;
