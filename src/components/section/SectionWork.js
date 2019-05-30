import React, {Component} from 'react';
import { connect, dispatch } from 'react-redux';
import Slider from "react-slick";
import { PORTFOLIO_DATA } from './../../constant/portfolioData';

import PortfolioCard from './components/sectionWork/PortfolioCard';
import ModalGallery from './components/sectionWork/ModalGallery';
import Rotate from './components/Rotate';

class SectionWork extends React.Component {
    constructor(props) {
        super(props);

        this.modalClose = this.modalClose.bind(this);
        this.escCloseModal = this.escCloseModal.bind(this);
    };

    modalClose() {
        const data = {
            modalActiveIndex:0,
            modalActive: false
        };

        this.props.dispatch({
            type: "MODAL_ACTIVE",
            data
        });
    };

    /**
     * The function monitors the status of the modal window and the events of the pressed ESC button.
     * Subject to the conditions, runs the function of closing the modal window
     */
    escCloseModal(event) {
        if(event.keyCode === 27 && this.props.modalActive) {
            this.modalClose();
        }; 
    };

    componentDidMount() {
        document.addEventListener('keydown', this.escCloseModal, false);
    };
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.escCloseModal, false);
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };    
    
        const portfolioCard = PORTFOLIO_DATA.map((element, index) => {
            return(
                <PortfolioCard
                    key={index}
                    id={index}
                    nameProject={element.nameProject}
                    coverImage={element.coverImage}
                    lable={element.lable}
                    description={element.description}
                    sourceLink={element.sourceLink}
                    appLink={element.appLink}
                />
            );
        });              
            
        return (
            <section>
                <div className='content content-overflow-y'>
                    <div className='slider-content'>
                        <Slider {...settings}>
                            {portfolioCard}
                        </Slider> 
                    </div>
                    <ModalGallery 
                        imageData={PORTFOLIO_DATA[this.props.modalIndex].imageData} 
                        modalActive={this.props.modalActive}
                        modalClose={this.modalClose}                   
                    />                                                                            
                </div>
                <Rotate/>
            </section>   
        );
    };    
};

const mapStateToProps = state => {
    return {
        modalActive: state.modalActive,
        modalIndex: state.modalActiveIndex
    };
};

export default connect(mapStateToProps) (SectionWork);