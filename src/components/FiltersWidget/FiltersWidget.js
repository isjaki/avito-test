import React from 'react';

import styles from './FiltersWidget.css';

const FiltersWidget = props => {
    return (
        <div className={styles.filtersWidget}>
            <h2>Фильтровать объявления</h2>
            <form>
                <p className={styles.categoryName}>По категории:</p>
                <div className={styles.formElement}>
                    <select className={styles.categorySelect}>
                        <option value="immovable">Недвижимость</option>
                        <option value="cameras">Фотоаппараты</option>
                        <option value="auto">Автомобили</option>
                        <option value="laptops">Ноутбуки</option>
                    </select>
                </div>
                <p className={styles.categoryName}>По цене:</p>
                <div className={styles.formElement}>
                    <label htmlFor="priceFrom" className={styles.priceLabel}>С</label>
                    <input type="text" id="priceFrom" className={styles.priceInput} />
                    <label htmlFor="priceTo" className={styles.priceLabel}>До</label> 
                    <input type="text" id="priceTo" className={styles.priceInput} />
                </div>
                <div className={styles.formElement}>
                    <label>
                        Только избранное <input type="checkbox" />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default FiltersWidget;

