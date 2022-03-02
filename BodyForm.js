import React from 'react';
import PhoneInput from 'react-phone-number-input' ;

class BodyForm extends React.Component {
    constructor() {
        super();
      this.state = {
        name : "" , age: "" , number: ""
       } ;
       
    }

     handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(values => ({...values, [name]: value}))
      }

     handleSubmit = (event) => {
        event.preventDefault();
        alert(`name is: ${this.state.username} \n age is: ${this.state.age} \n number is: ${this.state.number}`);
      }

   render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className='p-1' style={{border: '1px solid black'}}>
                    <div className='p-1'>
                       <label> <strong>Enter your name:</strong>  </label>
                       <input type="text" name="username" placeholder='ur name' value={this.state.username || ""}
                         onChange={this.handleChange}/> <br />
                    </div>
                    
                    <div className='p-1'>
                      <label> <strong>Enter your age:</strong> </label>
                      <input type="number" name="age" placeholder="ur age" value={this.state.age || ""}
                       onChange={this.handleChange} />
                    </div>

                    <div className='p-1'>
                    <PhoneInput  name="number" international={false} 
                       value={this.state.number} onChange={this.handleChange} style={{height: "10px",width: "10px"}}/>
                    </div>

                    <br />
                    <input type="submit" />
                </form>
            </>
        );
    }

}

export default BodyForm;