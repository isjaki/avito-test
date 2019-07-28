import React from 'react';

import PriceFilter from '../UI/PriceFilter/PriceFilter';
import Selector from '../UI/Selector/Selector';
import styles from './FiltersWidget.css';

const FiltersWidget = () => (
    <div className={styles.filtersWidget}>
        <h2>Фильтровать объявления</h2>
        <form>
            <p className={styles.categoryName}>По категории:</p>
            <div className={styles.formElementContainer}>
                <Selector
                    options={[
                        { value: 'all', displayValue: 'Все' },
                        { value: 'immovable', displayValue: 'Недвижимость' },
                        { value: 'cameras', displayValue: 'Фотоаппараты' },
                        { value: 'auto', displayValue: 'Автомобили' },
                        { value: 'laptops', displayValue: 'Ноутбуки' },
                    ]}
                />
            </div>
            <p className={styles.categoryName}>По цене:</p>
            <div className={styles.formElementContainer}>
                <PriceFilter />
            </div>
            <div className={styles.formElementContainer}>
                <button type="button">Только избранное</button>
            </div>
        </form>
    </div>
);


export default FiltersWidget;
