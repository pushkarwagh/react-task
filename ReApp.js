import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


class ReApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'lightgreen'
        };
    }

    changeColor = (ch) => {
        //console.log('just check');
        this.setState({ color: ch || "lightgreen" });
    }

    render() {
        return (
            <>            
                <div className='container p-2' style={{ backgroundColor: this.state.color }} >
                   <Header changeColor={this.changeColor} />
                    <Body />
                    <Footer box={this.state.color} />
                </div>
            </>
        );
    }
}

export default ReApp; 