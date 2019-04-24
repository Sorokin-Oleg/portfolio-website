import React, {component} from 'react';

class PortfolioImage extends React.Component {
    render () {
        return (
            <div className='portfolio-image-container' style={this.props.bgImage}>
                <h1 className='image-name-project'>{this.props.nameProject}</h1>
                <div className='portfolio-image-hover'>
                    <i className="fas fa-rocket"></i>
                    <h1>Go to Gallery</h1>
                </div>                 
            </div>
        );       
    };
};

PortfolioImage.defaultProps = {
    nameProject: 'Good Project',
    bgImage: {backgroundColor: '#eb4d4b'}
};

export default PortfolioImage;