import React from 'react';


export default function Signup() {
    const initialState={
        fullName:'',
        email:'',
        username:'',
        password:'',
    }
    const []
    return (
        <div>
             <div className="register-form">
                    <h2>Register</h2>
                    <form method="POST" onSubmit={this.handleRegister}>
                        <div className="input-field">
                            <input type="text" name='name' value={fullName} onChange={handleChange} required="required"/>
                            <span></span>
                            <label>Full Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name='email' value={email} onChange={handleChange} required="required"/>
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name='username' value={username} onChange={handleChange} required="required"/>
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div className="input-field">
                            <input type="password" name='password' value={password} onChange={handleChange} required="required"/>
                            <span></span>
                            <label>Password</label>
                        </div>
                        <button type="submit" >Register</button>
                        <div className="login-link">
                            Already Registered?<Link to="/">Log In</Link>
                        </div>
                    </form>
                </div>
        </div>
    )
}
