import React, { useEffect, useState } from 'react';
import FossilItem from '../../components/FossilItem';
import { fossilData } from '../../api/fossil';
import styles from './FossilScreen.module.css';

interface Fossil {
  // id: number;
  name: string;
  price: number;
museum_phrase: string;
image_uri: string;
part_of: string;
}

function FossilScreen() {
  console.log("Fossil Data", fossilData);

  const [fossils, setFossils] = useState<Fossil[]>(fossilData);

  const getFossil = async () => {
    try {
      const res = await fetch('http://localhost:8080/fossil');
      const jsonData = await res.json();
      console.log(jsonData);
      setFossils(jsonData);
    } catch (error) {
      console.error("Error fetching fossil data: " + error);
      setFossils(fossilData);
    }
  };

  useEffect(() => {
    // getFossil();
  }, []);

  return (
    <div className={styles.FossilScreen}>
      <div className={styles.Container}>
        <h1 className={styles.Title}>Fossil Screen</h1>
        <div className={styles.FishList}>
        {fossils!.map((fossil) => { 
          return <FossilItem key={fossil.name} name={fossil.name} price={fossil.price} museum_phrase={fossil.museum_phrase} />;
        })}     
        </div>
      </div>
    </div>
  );
}

export default FossilScreen;
