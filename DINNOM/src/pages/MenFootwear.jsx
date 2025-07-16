import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const menFootwear = [
  {
    id: 1,
    name: 'Slim Fit Formal Trousers',
    price: 2100,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb1a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb1b.png?alt=media',
  },
  {
    id: 2,
    name: 'Straight Fit Chinos',
    price: 1900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb2a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb2b.png?alt=media',
  },
  {
    id: 3,
    name: 'Cotton Cargo Joggers',
    price: 2200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb3a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb3b.png?alt=media',
  },
  {
    id: 4,
    name: 'Relaxed Fit Sweatpants',
    price: 2300,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb4a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb4b.png?alt=media',
  },
  {
    id: 5,
    name: 'Denim Distressed Shorts',
    price: 1700,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb5a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb5b.png?alt=media',
  },
  {
    id: 6,
    name: 'Twill Flat-Front Shorts',
    price: 1500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb6a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb6b.png?alt=media',
  },
  {
    id: 7,
    name: 'Tapered Fit Jogger Pants',
    price: 2000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb7a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb7b.png?alt=media',
  },
  {
    id: 8,
    name: 'Printed Cotton Lounge Shorts',
    price: 1300,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb8a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb8b.png?alt=media',
  },
  {
    id: 9,
    name: 'Tailored Pinstripe Trousers',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb9a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb9b.png?alt=media',
  },
  {
    id: 10,
    name: 'Linen Blend Drawstring Pants',
    price: 2400,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb10a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FMen%2F2pants%2Fmb10b.png?alt=media',
  },
];

const MenFootwear = () => {
  return <CategoriesExpand products={menFootwear} />;
};

export default MenFootwear;
