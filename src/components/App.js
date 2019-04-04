import React, {Component} from 'react';


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="content"><h1>First page</h1></div>
                <div className="content" style={{background: '#fff'}}><h1>Second page</h1></div>
            </div>
        );
    }
};

export default App;