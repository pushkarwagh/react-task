import React from 'react';
//import Input from 'react-phone-number-input/input'

class UserForm extends React.Component {
    render() {
        return (
            <>
                <form >
                    <div className='p-1'> Enter Name: <input type="text" placeholder="entr ur name" /> <br /> </div>
                    <div className='p-1'> E-mail Id: <input type="email" placeholder="entr valid email-id" /> <br /> </div>
                    <div className='p-1'> Contact No: <input type= "number" /> <br /> </div>
                    
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </>
        );
    }
}

export default UserForm;


