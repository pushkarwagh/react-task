import React from 'react';
import RadioButton from './RadioButton';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }
    render() {
        return(
           <>
            <div className='heading p-5 my-2' style={ {textAlign: 'center' , backgroundColor: 'orange'} }>
                <RadioButton  changeColor={this.props.changeColor} />
                <h1>React Task</h1>
            </div>
           </>
        );
    }
}

export default Header;