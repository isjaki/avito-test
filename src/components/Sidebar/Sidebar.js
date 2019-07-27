import React from 'react';
import PropTypes from 'prop-types';

import styles from './Sidebar.css';

const Sidebar = ({ children }) => (
    <aside className={styles.sidebar}>
        {children}
    </aside>
);

Sidebar.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Sidebar;
