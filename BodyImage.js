import React from 'react';
import Image4 from '../Images/im3b.jpg';

class BodyImage extends React.Component {
    render() {
        return(
            <>
            <div className='col-6' >
                <img alt='user image' src={Image4} style={{ width:'250px' , height:'250px' ,position:'relative'}} />
            </div>
            </>
        );
    }
}

export default BodyImage;