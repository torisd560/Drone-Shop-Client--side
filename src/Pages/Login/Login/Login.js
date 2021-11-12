import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Link , useHistory , useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { error, handleLogin, handleGoogleLogin, handleResetPassword } = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        // console.log(loginData)
    }

    const handleSubmit = e => {
        handleLogin(loginData.email, loginData.password, location, history)
        e.preventDefault()

    }

    const signInWithGoogle = () =>{
        handleGoogleLogin(history, location)
    }


    return (
        <div>
            <div className='my-5 mx-auto w-50'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center custom-text-primary fw-bold my-3'>Please Login</h3>
                    <div className="mb-3 my-5">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-pink me-2"></i>E-mail</label>
                        <input
                            onBlur={handleOnBlur}
                            type="email"
                            name="email"
                            className="form-control" required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key custom-text-pink me-2"></i>Password</label>
                        <input
                            onBlur={handleOnBlur}
                            type="password"
                            name="password"
                            className="form-control"
                        />
                    </div>

                    <div>
                        <p onClick ={() =>handleResetPassword(loginData.email)} className='text-primary custom-cursor'> Forgot Password ? </p>
                        <Button type="submit" className=" custom-btn me-3 rounded-3 mt-2">Login</Button>
                        <Button onClick = {signInWithGoogle} variant="warning" className=' btn btn-warning me-3'><i className="fab fa-google text-white fs-5 px-4 "></i></Button>
                        <p className=' mt-4'>Don't have an account?<Link to='/register'> Sign Up</Link></p>
                        <p className='text-danger fw-bold mt-4'>{error}</p>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Login;