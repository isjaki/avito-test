import React from 'react';

import Advert from '../Advert/Advert';
import styles from './AdvertsList.css';

const AdvertsList = props => {
    return (
        <div className={styles.advertsList}>
            <Advert />
        </div>
    );
}

export default AdvertsList;