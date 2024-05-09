import React, { useState } from 'react';
import './LoginForm.css'; 

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setPassword] = useState('');


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="login-form-container mb-5">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Registration form</h2>
                <div className="form-group">
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="rounded-5"
                        placeholder='username'
                    />
                </div>
                <div className="form-group">
                   
                    <input
                        type="email"
                        id="password"
                        value={email}
                        onChange={handlePasswordChange}
                        className="rounded-5"
                    />
                </div>
                <button type="submit" className=" bg-secondary rounded-5">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;

