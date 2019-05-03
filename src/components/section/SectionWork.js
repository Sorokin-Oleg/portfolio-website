import React, {Component} from 'react';
import { connect, dispatch } from 'react-redux';
import Slider from "react-slick";
import PortfolioCard from './components/sectionWork/PortfolioCard';
import ModalGallary from './components/sectionWork/modalGallary/ModalGallary';
import { PORTFOLIO_DATA } from './../constant/portfolioData';

class SectionWork extends React.Component {
    constructor(props) {
        super(props);

        this.modalClose = this.modalClose.bind(this);
        this.escCloseModal = this.escCloseModal.bind(this);
    }

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
        if(event.keyCode === 27 && this.props.modal.modalActive) {
            this.modalClose();
        }; 
    };

    componentDidMount() {
        document.addEventListener('keydown', this.escCloseModal, false);
    };
    
    componentWillUnmount() {
        document.addEventListener('keydown', this.escCloseModal, false);
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
            <section className='content'>
                <div className='slider-content'>
                    <Slider {...settings}>
                        {portfolioCard}
                    </Slider> 
                </div>
                <ModalGallary 
                    imageData={PORTFOLIO_DATA[this.props.modal.modalActiveIndex].imageData} 
                    modalActive={this.props.modal.modalActive}
                    modalClose={this.modalClose}                   
                />                           
            </section>
        );
    };    
};

const mapStateToProps = state => {
    return {
        modal: state        
    };
};

export default connect(mapStateToProps) (SectionWork);