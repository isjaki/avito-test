import React from 'react';

import PriceFilter from '../UI/PriceFilter/PriceFilter';
import FormElementContainer from '../UI/FormElementContainer/FormElementContainer';
import Selector from '../UI/Selector/Selector';
import Button from '../UI/Button/Button';
import styles from './FiltersWidget.css';

const FiltersWidget = () => (
    <div className={styles.filtersWidget}>
        <h2>Фильтровать объявления</h2>
        <form>
            <FormElementContainer label="По категории:">
                <Selector
                    options={[
                        { value: 'all', displayValue: 'Все' },
                        { value: 'immovable', displayValue: 'Недвижимость' },
                        { value: 'cameras', displayValue: 'Фотоаппараты' },
                        { value: 'auto', displayValue: 'Автомобили' },
                        { value: 'laptops', displayValue: 'Ноутбуки' },
                    ]}
                />
            </FormElementContainer>
            <FormElementContainer label="По цене:">
                <PriceFilter />
            </FormElementContainer>
            <FormElementContainer>
                <Button buttonType="pickFavorites" />
            </FormElementContainer>
        </form>
    </div>
);


export default FiltersWidget;
