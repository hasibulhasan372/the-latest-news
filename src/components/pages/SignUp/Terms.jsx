import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>The Terms and Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate provident eius non accusamus ea odit vitae quaerat perferendis earum, laboriosam, voluptas magnam unde, distinctio saepe ipsa quasi labore sunt nostrum pariatur optio inventore quod reiciendis iure. Dignissimos aspernatur consequuntur non incidunt, odit vitae iste, quo temporibus vero quidem dolores rem!</p>
            <Link to='/register'>Back to Registration </Link>
        </div>
    );
};

export default Terms;