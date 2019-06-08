import React from 'react';
import PropTypes from 'prop-types';

const PortfolioTechnology = ({lable}) => {    
    const item = lable.map((element, index) => (
        <span className='portfolio-technology-item' key={index}>{element}</span>
    ));

    return (
        <div className='portfolio-technology-container'>{item}</div>
    );
};

PortfolioTechnology.defaultProps = {
    lable: ['none']
};

PortfolioTechnology.propTypes = {
    lable: PropTypes.array
};

export default PortfolioTechnology;