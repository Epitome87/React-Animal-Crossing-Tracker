import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BugItem.module.css';

interface IBug {
  name: string;
  price: number;
  location: string;
  time: string;
}

const BugItem  = ({ name, price, location, time } : IBug) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/bug/${name}`);
  }

  return (
  <div className={styles.BugItem} onClick={handleOnClick}>
    <div className={styles.Name}>{name}</div>
    <div className={styles.Price}>Price: {price}</div>
    <div className={styles.Location}>Location: {location}</div>
    <div className={styles.Time}>Time: {time}</div>
  </div>
  );
}

export default BugItem;