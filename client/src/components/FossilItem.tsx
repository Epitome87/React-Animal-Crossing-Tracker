import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FossilItem.module.css';

interface FossilItemProps {
  name: string;
  price: number;
  museum_phrase: string;
}

const FossilItem  = ({ name, price, museum_phrase } : FossilItemProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/fossil/${name}`);
  }

  return (
  <div className={styles.FossilItem} onClick={handleOnClick}>
    <div className={styles.Name}>{name}</div>
    <div className={styles.Price}>Price: {price}</div>
    {/* <div className={styles.Phrase}>Phrase: {museum_phrase}</div> */}
  </div>
  );
}

export default FossilItem;