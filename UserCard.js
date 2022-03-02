import React from 'react';
import Card from 'react-bootstrap/Card';
import UserData from './UserData';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
       }
    
    render() {
        return (
            <>
                <div className='col-6'>
                    <Card className ='border-danger' style={{ width: 'auto', height: 'auto' }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}> <u>User Records</u></Card.Title>
                            <Card.Text>
                               <UserData userData={this.props.data}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}

export default UserCard;