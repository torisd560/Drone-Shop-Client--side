import React, { useState } from 'react';
import { FormControl, InputGroup, Button, Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const user = { email }
    const { alert, setAlert } = useAuth()

    const handleAdmin = e => {

        setEmail(e.target.value)
        e.target.value = ""
    }

    const handleSubmit = e => {
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAlert(true)
                }
            })
        e.preventDefault()
    }

    return (
        <div className='my-5'>
            <h1 className='custom-text-primary fw-bold'>Make An Admin ?
                <br /> Type Candidate Email Address Below</h1>

            {alert && <Alert variant="success" className="my-5">
                <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Admin made successfully
            </Alert>}

            <form onSubmit={handleSubmit}>
                <InputGroup
                    className="my-5 w-50 mx-auto">
                    <FormControl
                        onBlur={handleAdmin}
                        placeholder=" candidate email address......... "
                    />
                    <Button type="submit" className='custom-btn' >Make Admin</Button>
                </InputGroup>
            </form>
        </div>
    );
};

export default MakeAdmin;