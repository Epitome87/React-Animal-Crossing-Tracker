import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HomeScreen.module.css';

function HomeScreen() {
  return (
    <div className={styles.HomeScreen}>
      <div className={styles.Container}>
      <main>
        <h1 className={styles.Title}>Animal Crossing: New Horizons - Tracker</h1>
        <h2>A Work In Progress</h2>
        <h3>
          This site will allow players to track various Collections found within
          Animal Crossing: NH
        </h3>
        <div className={styles.Buttons}>
          <button>
            <Link to='/fish'>Fish</Link>
          </button>
          <button>
            <Link to='/sea'>Sea Creatures</Link>
          </button>
          <button>
            <Link to='/bug'>Bugs</Link>
          </button>
          <button>
            <Link to='/fossil'>Fossils</Link>
          </button>
          <button>
            <Link to='/villager'>Villagers</Link>
          </button>
          <button>
            <Link to='/art'>Art</Link>
          </button>
          <button>
            <Link to='/music'>Music</Link>
          </button>
          <button>
            <Link to='/item'>Items</Link>
          </button>
        </div>
      </main>
      </div>
    </div>
  );
}

export default HomeScreen;
