import React from 'react';

import Filters from '../../containers/Filters/Filters';
import styles from './FiltersWidget.css';

const FiltersWidget = () => (
    <div className={styles.filtersWidget}>
        <h2>Фильтровать объявления</h2>
        <form>
            <Filters />
        </form>
    </div>
);


export default FiltersWidget;
