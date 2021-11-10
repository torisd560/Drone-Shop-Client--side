import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <div className='my-5'>
            <h1 className='custom-text-primary fw-bold'>Make An Admin ?
                <br /> Type Candidate Email Address Below</h1>
            <InputGroup className="my-5 w-50 mx-auto">
                <FormControl
                    placeholder=" candidate email address......... "
                />
                <Button className='custom-btn' >Make Admin</Button>
            </InputGroup>
        </div>
    );
};

export default MakeAdmin;