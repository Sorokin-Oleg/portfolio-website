import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';


class App extends React.Component {
    render() {
        return (
            <div className='main-content'>
                <Navbar />               
                <div className="content"><h1>First page</h1></div>
            </div>
        );
    }
};

export default App;