import React, { Fragment } from 'react';

import FormElementContainer from '../../components/UI/FormElementContainer/FormElementContainer';
import Selector from '../../components/UI/Selector/Selector';
import PriceFilter from '../../components/UI/PriceFilter/PriceFilter';
import Button from '../../components/UI/Button/Button';

const Filters = () => (
    <Fragment>
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
    </Fragment>
);

export default Filters;
