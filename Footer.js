import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
             <div className='footer p-5 ' style={ {textAlign: 'center' , backgroundColor: 'cyan'} }>
                 <p>This is a Footer</p>

                 <div className='footerBox' style={ { margin:'auto',width:'150px', height:'50px', 
                   borderRadius:'20px' ,backgroundColor: this.props.box}} > ColorChange </div>

             </div>             
            </>
        );
     }
}

export default Footer ;