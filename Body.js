import React from 'react';
import BodyImage from './BodyImage';
import UserCard from './UserCard';



class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [{ id: 1, name: "Rakesh", email: "rK@usercard.com", contact: 5634121 },
            { id: 2, name: "Mahesh", email: "mH@usercard.com", contact: 8595121 },
            { id: 3, name: "Shreya", email: "sR@usercard.com", contact: 4585121 } ]
        };
    }
    render() {
        return (
            <>
                <div className='body p-2 mb-2' style={{ backgroundColor: 'lightblue' }}>
                    <div className='row g-4' >
                        {this.state.user.map((element, index) => (
                            <>
                                 <UserCard data={element} />
                                 <BodyImage />
                            </>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Body;