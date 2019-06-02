import React, {Component} from 'react';
import Slider from "react-slick";

const ModalGallery = (props) => {
    const settings = {
        dots: true,        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const image = props.imageData.image.map((element, index) => {
        return(
            <div key={index} className='modal-image-container'>
                <img src={element} alt={props.imageData.alt[index]}/>
            </div>
        );
    });

    const modalState = props.modalActive ? {display:'flex'} : {display:'none'};
    
    return(
        <div className='modal-gallery-container'style={modalState}>
            <button className='modal-gallery-button-close' onClick={props.modalClose}>
                <i className="fas fa-times"></i>
            </button>
            <div className='slider-modal-content'>                
                <Slider {...settings}>
                    {image}
                </Slider>
            </div>
        </div>
    );
};

export default ModalGallery;