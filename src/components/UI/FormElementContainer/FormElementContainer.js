import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormElementContainer.css';

const FormElementContainer = ({ label, children }) => (
    <div className={styles.formElementContainer}>
        {label && <p className={styles.label}>{label}</p>}
        {children}
    </div>
);

FormElementContainer.propTypes = {
    label: PropTypes.string,
    children: PropTypes.element.isRequired,
};

FormElementContainer.defaultProps = {
    label: null,
};

export default FormElementContainer;
