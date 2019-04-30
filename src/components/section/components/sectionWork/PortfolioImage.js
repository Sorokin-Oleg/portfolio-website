import React, {component} from 'react';

const PortfolioImage = (props) => {
    return (
        <div className='portfolio-image-container' style={props.coverColor}>
            <h1 className='image-name-project'>{props.nameProject}</h1>
            <div className='portfolio-image-hover'>
                <i className="fas fa-rocket"></i>
                <h1>Go to Gallery</h1>
            </div>                 
        </div>
    );
};

PortfolioImage.defaultProps = {
    nameProject: 'Good Project',
    coverColor: {backgroundColor: '#eb4d4b'}
};

export default PortfolioImage;