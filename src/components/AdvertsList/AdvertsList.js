import React from 'react';

import Advert from '../Advert/Advert';
import styles from './AdvertsList.css';

const AdvertsList = () => (
    <main className={styles.advertsList}>
        <Advert />
        <Advert />
        <Advert />
    </main>
);

export default AdvertsList;
