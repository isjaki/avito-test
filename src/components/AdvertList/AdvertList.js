import React from 'react';
import PropTypes from 'prop-types';

import Advert from '../Advert/Advert';
import styles from './AdvertList.css';

const AdvertList = ({ adverts }) => (
    <main className={styles.advertsList}>
        {adverts.map(advert => <Advert key={advert.id} />)}
    </main>
);

AdvertList.propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AdvertList;
