import React from 'react';

import RatingWidget from '../UI/RatingWidget/RatingWidget';
import styles from './Advert.css';

const Advert = () => (
    <div className={styles.advert}>
        <div className={styles.imageContainer}>
            <img
                alt="car"
                src="https://loremflickr.com/cache/resized/65535_46914519835_6232ba85d8_z_400_400_nofilter.jpg"
            />
            <div className={styles.additionalPhotos}><span>+3</span></div>
        </div>
        <div className={styles.mainInfo}>
            <h2 className={styles.title}>апартаменты 3 комнаты, 70 кв.м.</h2>
            <p className={styles.price}>{`${983823}`} &#8381;</p>
            <p className={styles.sellerInfo}>
                Вольво-центр Юг <RatingWidget rating={4.5} />
            </p>
        </div>
    </div>
);

export default Advert;
