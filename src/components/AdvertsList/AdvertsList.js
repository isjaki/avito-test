import React from 'react';

import Advert from '../Advert/Advert';
import styles from './AdvertsList.css';

const AdvertsList = () => (
    <div className={styles.advertsList}>
        <Advert />
        <Advert />
        <Advert />
    </div>
);

export default AdvertsList;
