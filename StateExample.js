import React from "react";

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }  
     
    change = (colr) => {
      this.setState( {color: colr} );
    } 
    
    render() {
      return ( <>
        <div  style = {{backgroundColor: this.state.color}} >
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} - 
            {this.state.model} - 
            from {this.state.year}.
            it is a {this.props.nw}
          </p>        
        </div>
            <button type="button" onClick={() => this.change("blue")}>Change blue</button>
            <button type="button" onClick={() => this.change("yellow")}>Change yellow</button>
            <button type="button" onClick={() => this.change("red")}>Change red</button>
           </>
      );
    }
  }

export default Car;