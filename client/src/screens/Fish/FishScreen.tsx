import React, { useEffect, useState } from 'react';
import FishItem from '../../components/FishItem';
import { fishData } from '../../api/fish';
import styles from './FishScreen.module.css';

interface Fish {
  // id: number;
  name: string;
  location: string;
  price: number;
  time: string;
  shadowSize: string;
  month: {
    north: number[],
    south: number[],
  }
}

function FishScreen() {
  console.log("Fish Data", fishData);

  const [fishes, setFishes] = useState<Fish[]>(fishData);

  const getFish = async () => {
    try {
      const res = await fetch('http://localhost:8080/fish');
      const jsonData = await res.json();
      console.log(jsonData);
      setFishes(jsonData);
    } catch (error) {
      console.error("Error fetching fish data: " + error);
      setFishes(fishData);
    }
  };

  useEffect(() => {
    // getFish();
  }, []);

  return (
    <div className={styles.FishScreen}>
      <div className={styles.Container}>
        <h1 className={styles.Title}>Fish Screen</h1>
        <div className={styles.FishList}>
        {fishes!.map((fish) => {
          return <FishItem key={fish.name} name={fish.name} location={fish.location} price={fish.price} time={fish.time} />;
        })}     
        </div>
      </div>
    </div>
  );
}

export default FishScreen;
