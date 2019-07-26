import React from 'react';

import styles from './FiltersWidget.css';

const FiltersWidget = () => (
    <div className={styles.filtersWidget}>
        <h2>Фильтровать объявления</h2>
        <form>
            <p className={styles.categoryName}>По категории:</p>
            <div className={styles.formElementContainer}>
                <select className={styles.categorySelect}>
                    <option value="all">Все</option>
                    <option value="immovable">Недвижимость</option>
                    <option value="cameras">Фотоаппараты</option>
                    <option value="auto">Автомобили</option>
                    <option value="laptops">Ноутбуки</option>
                </select>
            </div>
            <p className={styles.categoryName}>По цене:</p>
            <div className={styles.formElementContainer}>
                <label htmlFor="priceFrom" className={styles.priceLabel}>
                    С
                    <input type="text" id="priceFrom" className={styles.priceInput} />
                </label>
                <label htmlFor="priceTo" className={styles.priceLabel}>
                    До
                    <input type="text" id="priceTo" className={styles.priceInput} />
                </label>
            </div>
            <div className={styles.formElementContainer}>
                <button type="button">Только избранное</button>
            </div>
        </form>
    </div>
);


export default FiltersWidget;
