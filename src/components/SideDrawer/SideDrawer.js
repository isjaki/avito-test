import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Backdrop from '../UI/Backdrop/Backdrop';
import styles from './SideDrawer.css';

const SideDrawer = ({ children, isSideDrawerOpened, onClick }) => {
    const classes = classNames({
        [styles.sideDrawer]: true,
        [styles.opened]: isSideDrawerOpened,
    });

    return (
        <Fragment>
            <div className={classes}>
                {children}
            </div>
            <Backdrop isVisible={isSideDrawerOpened} onClick={onClick} />
        </Fragment>
    );
};

SideDrawer.propTypes = {
    children: PropTypes.element.isRequired,
    isSideDrawerOpened: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SideDrawer;
