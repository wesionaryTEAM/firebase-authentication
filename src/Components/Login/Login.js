import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './login.css';

export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginWithEmailAndPassword = (e,email,password)=>{
        e.preventDefault();
    }
     const handleChange = (e) =>{
        const {name,value}=e.target;  
        
        if (name==='email'){
            setEmail=(value);
        }
        else if(name==='password'){
            setPassword=(value);
        }
    }
    return (
        <div>
            <>
                <div className="login-form">
                    <div className='title-container'>
                    <h2 className='login-title'>Login</h2>
                    </div>
                    <form method="POST">
                        <div className="input-field">
                        <input type="text" name='email' value={email} onChange={handleChange} required="required"/>
                        <span></span>
                        <label>Email</label>
                        </div>
                        <div className="input-field">
                        <input type="password" name='password' value={password} onChange={handleChange} required="required"/>
                        <span></span>
                        <label>Password</label>
                        </div> 
                        <div className="login-btn">
                        <button type="submit" onClick={(e)=>loginWithEmailAndPassword(e,email,password)}>Login</button>
                        </div>
                        <div className="google-login-btn">
                        <button type="submit">Login With Google</button>
                        </div>
                        <div className="register">
                            Dont Have an Account?<Link to="/signup">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </>
        </div>
    )
}
