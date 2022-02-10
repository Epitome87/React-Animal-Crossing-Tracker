import React, { useEffect, useState } from 'react';
import BugItem from '../../components/BugItem';
import { bugData } from '../../api/bug';
import styles from './BugScreen.module.css';

interface IBug {
  // id: number;
  name: string;
  location: string;
  price: number;
  time: string;
  month: {
    north: number[],
    south: number[],
  }
}

function BugScreen() {
  console.log("Bug Data", bugData);

  const [bugs, setBugs] = useState<IBug[]>(bugData);

  const getBug = async () => {
    try {
      const res = await fetch('http://localhost:8080/bug');
      const jsonData = await res.json();
      console.log(jsonData);
      setBugs(jsonData);
    } catch (error) {
      console.error("Error fetching bug data: " + error);
      setBugs(bugData);
    }
  };

  useEffect(() => {
    // getBug();
  }, []);

  return (
    <div className={styles.BugScreen}>
      <div className={styles.Container}>
        <h1 className={styles.Title}>Bug Screen</h1>
        <div className={styles.BugList}>
        {bugs!.map((bug) => { 
          return <BugItem key={bug.name} name={bug.name} location={bug.location} price={bug.price} time={bug.time} />;
        })}     
        </div>
      </div>
    </div>
  );
}

export default BugScreen;
