import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const { error, handleRegister } = useAuth()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value
        setRegisterData(newRegisterData)
       

    }

    const handleSubmit = e => {
        e.preventDefault()
        handleRegister(registerData.email, registerData.password, registerData.name, history)
      
    }

    return (
        <div style = {{marginTop : '150px', marginBottom : '150px'}}>
            <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit}  className = '  page-banner py-3 px-5'>
                <h3 className='text-center text-white fw-bold mt-5'>Please Sign Up</h3>
                <div className="mb-3 my-5">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white"><i className="fas fa-user custom-text-pink me-2"></i>Full Name</label>
                    <input
                        onBlur={handleOnBlur}
                        type="text"
                        name="name"
                        className="form-control rounded-0" required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white"><i className="fas fa-envelope-square custom-text-pink me-2"></i>Email</label>
                    <input
                        onBlur={handleOnBlur}
                        type="email"
                        name="email"
                        className="form-control rounded-0" required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white"><i className="fas fa-key custom-text-pink me-2"></i>Password</label>
                    <input
                        onBlur={handleOnBlur}
                        type="password"
                        name="password"
                        className="form-control rounded-0" required
                    />
                </div>
                <button type="submit" className="btn custom-btn me-3">Sign Up</button>

                <p className=' mt-4 text-center text-white'>Already have an Account? <Link to='/login'> Please Login</Link> </p>

                <p className='text-danger fw-bold text-center'>{error}</p>
            </form>
        </div>
        </div>
    );
};

export default Register;