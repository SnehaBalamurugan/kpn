import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Image1 from '../assests/images/img1.jpeg'
import Image2 from '../assests/images/img2.jpeg'
import Image3 from '../assests/images/img3.jpeg'
import Image4 from '../assests/images/img4.jpeg'
import Image5 from '../assests/images/img5.jpeg'
import Image6 from '../assests/images/img6.jpeg'
import Image7 from '../assests/images/img7.jpeg'
import Image8 from '../assests/images/img8.jpeg'

const categoryArray = [
  { src: Image1, label: 'Masalas' },
  { src: Image2, label: 'Dry Fruits' },
  { src: Image3, label: 'Whole Spices' },
  { src: Image4, label: 'Juices' },
  { src: Image5, label: 'Rice Products' },
  { src: Image6, label: 'Curd & Yogurt' },
  { src: Image7, label: 'Papads' },
  { src: Image8, label: 'Wafer' },
]

const fruitsAndVegArray = [
  { src: Image1, label: 'Fresh Fruits' },
  { src: Image2, label: 'Fresh Veges' },
  { src: Image3, label: 'Exotics' },
  { src: Image4, label: 'Leafy Veges' },
  { src: Image5, label: 'Salads' },
  { src: Image6, label: 'Juices' },
  { src: Image7, label: 'Regional Produce' },
  { src: Image8, label: 'Aggregrate Fruits' },
]

const CardGrid = ({ type }) => {
  const navigate = useNavigate()
  return (
    (type === 'top-categories' ?
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {categoryArray.map((item, index) => (
          <Card key={index} imageSrc={item.src} label={item.label} onClick={()=>{navigate('/categories')}}/>
        ))}
      </div> :
      (type === 'fruits-and-veges' ?
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {fruitsAndVegArray.map((item, index) => (
            <Card key={index} imageSrc={item.src} label={item.label} onClick={()=>{navigate('/categories')}}/>
          ))}
        </div> : null))
  );
};

export default CardGrid;
