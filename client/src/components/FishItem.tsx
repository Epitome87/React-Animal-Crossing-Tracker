import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FishItem.module.css';

interface Props {
  name: string;
  price: number;
  location: string;
  time: string;
}

const FishItem: React.FC<Props> = ({ name, price, location, time }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/fish/${name}`);
  }

  return (
  <div className={styles.FishItem} onClick={handleOnClick}>
    <div className={styles.Name}>{name}</div>
    <div className={styles.Price}>Price: {price}</div>
    <div className={styles.Location}>Location: {location}</div>
    <div className={styles.Time}>Time: {time}</div>
  </div>
  );
}

export default FishItem;
