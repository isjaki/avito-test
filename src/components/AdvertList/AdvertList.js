import React from 'react';
import PropTypes from 'prop-types';

import Advert from '../Advert/Advert';

const AdvertList = ({ adverts }) => (
    adverts.map(advert => (
        <Advert
            key={advert.id}
            title={advert.title}
            price={advert.price}
            pictures={advert.pictures}
        />
    ))
);

AdvertList.propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AdvertList;
