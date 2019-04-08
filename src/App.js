import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import SectionHome from './components/section/SectionHome';
import SectionAbout from './components/section/SectionAbout';
import SectionSkills from './components/section/SectionSkills';
import SectionWork from './components/section/SectionWork';
import SectionContact from './components/section/SectionContact';


class App extends React.Component {
    constructor(props){
        super(props);
        this.renderSwitch = this.renderSwitch.bind(this);
    }

    /**
     * The method of displaying the current page (page repository)
     */
    renderSwitch(pageIndex){
        switch (pageIndex) {
            case 1:
                return <SectionHome />;
            case 2:
                return <SectionAbout />;
            case 3:
                return <SectionSkills />;
            case 4:
                return <SectionWork />;
            case 5:
                return <SectionContact />;        
            default:
                return <SectionHome />;
        }
    }

    render() {
        return (
            <div className='main-content'>
                <Navbar />               
                {this.renderSwitch()}
            </div>
        )
    }
};

export default App;