import React from 'react';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
   }
    render() {
        return(
            <>        
            <div className='userData'>
                <ul style={{listStyleType:'none'}}>                
                    <li>Name: {this.props.userData.name} </li>
                    <li>E-mail: {this.props.userData.email}</li>
                    <li>Contact: {this.props.userData.contact}</li> 
                </ul>                                       
            </div>
            </>
        );
    }
}

export default UserData;