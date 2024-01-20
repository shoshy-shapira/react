import axios from 'axios';
import { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import LoginFailed from './LoginFailed';
import Alert from '@mui/material/Alert';





function Login({ onLoginSuccess }) {
    const [name, setName] = useState('');
    const [password, setPasword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {

        try {
            await axios.post('http://localhost:8787/login', { name, password }).then(
                res => {
                    if (res.status === 200) {
                        console.log('success');
                        <Alert severity="success"> Success to enter </Alert>
                        onLoginSuccess();
                        <Outlet />
                        navigate('/admin');
                    }
                }
            );
        } catch (error) {
            if (error.response && error.response.status === 401) {
                <Alert severity="error">login failed</Alert>
                console.log('login failed');
                <Outlet />
                navigate('/failed');
            } else {
                console.log(error);
                <Outlet />
                navigate('/failed');

            }
        }
    }
    return (
        <>
            <label>name:
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>password:
                <input type='password' value={password} onChange={(e) => setPasword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin} >Log In</button>

        </>
    )
}

export default Login
