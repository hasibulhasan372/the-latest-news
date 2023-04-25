import React from 'react';
import { Button } from 'react-bootstrap';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div>
                <Button variant="outline-primary" className='w-100'>Login with Google</Button>
                <Button variant="outline-secondary" className='w-100'>Login with Github</Button>
            </div>
        </div>
    );
};

export default RightNav;
