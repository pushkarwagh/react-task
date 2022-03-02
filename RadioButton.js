import React from 'react';

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
       /* this.state = {
            color: 'white'
        }; */
    
    }
    /*
    changeColor = (change) => {
        this.setState( {color: change} );
    } */

    render() {
        return(
            <>
            <div className='radioButton'>            
              <input type="radio" name="color" value="grey" onClick={() => this.props.changeColor("#ccc")} /> grey
              <input type="radio" name="color" value="blue" onClick={() => this.props.changeColor("#d078b4")} /> Purple 
              <input type="radio" name="color" value="default" onClick={() => this.props.changeColor()} /> default
            </div>
            </>
        ); 
              
         
    }
}

export default RadioButton;