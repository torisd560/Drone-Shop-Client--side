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
        fetch(`https://fast-plateau-38541.herokuapp.com/users/admin`, {
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
        <div >
            <h1 className='custom-text-dark fw-bold my-5'>Make An Admin ?
                <br /> Type Candidate Email Address Below</h1>

            {alert && <Alert variant="success" className="my-5">
                <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Admin made successfully
            </Alert>}

            <div className='page-banner w-75  mx-auto'>
                <form onSubmit={handleSubmit} className='p-5'>
                    <InputGroup
                        className="my-5 w-100 mx-auto p-4">
                        <FormControl
                            onBlur={handleAdmin}
                            placeholder='Type email ....'
                            className='py-3 rounded-0'
                        />
                        <Button type="submit" className='custom-btn' >Make Admin</Button>
                    </InputGroup>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;