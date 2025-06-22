import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserThunk } from '../../store/session'; // Assuming you have a login action in your session store

import './LoginFormPage.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State variables for form inputs and errors
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setCredential('');
        setPassword('');
        setErrors({});
        setIsButtonDisabled(true);
    }, []);

    useEffect(() => {
        const newErrors = {};
        if (credential.length > 0 && credential.length < 4) {
            newErrors.credential = 'Username or Email must be at least 4 characters';
        }
        if (password.length > 0 && password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        setIsButtonDisabled(credential.length < 4 || password.length < 6);
    }, [credential, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isButtonDisabled) return;

        const user = { credential, password };
        try {
            await dispatch(loginUserThunk(user));
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            setErrors({ ...errors, server: 'Login failed. Please check your credentials.' });
        }
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h1>Log In</h1>
                {errors.message && (
                    <p className='error-message'>{errors.message}</p>
                )}
                <div className='login-items'>
                    <label id='userName-field'>
                        Username or Email
                        <input
                            type="text"
                            className='login-box'
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                    {errors.credential && (
                        <p className='error-message'>{errors.credential}</p>
                    )}
                    <label id='password-field'>
                        Password
                        <input
                            type="password"
                            className='login-box'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    {errors.password && (
                        <p className='error-message'>{errors.password}</p>
                    )}
                </div>
                <button type="submit" id='login-button' disabled={isButtonDisabled}>Log In</button>
            </form>
        </div>
    );
}

export default LoginFormPage;