import React, { useEffect, useState } from 'react';
import FishItem from '../components/FishItem';

interface Fish {
  id: number;
  name: string;
}

function FishScreen() {
  const [fishes, setFishes] = useState<Fish[]>([]);

  const getFish = async () => {
    try {
      const res = await fetch('http://localhost:8080/fish');
      const jsonData = await res.json();
      console.log(jsonData);
      setFishes(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFish();
  }, []);

  return (
    <React.Fragment>
      <div>Fish Screen</div>
      {fishes!.map((fish) => {
        return <FishItem key={fish.id} name={fish.name} />;
      })}
    </React.Fragment>
  );
}

export default FishScreen;
