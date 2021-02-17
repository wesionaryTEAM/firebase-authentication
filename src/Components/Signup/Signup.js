import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './signup.css';

export default function Signup() {
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [rePassword,setRePassword]=useState('')
    const createUserWithEmailAndPassword= (e,email,password)=>{
        e.preventDefault();
        setFullName('')
        setEmail('');
        setPassword('');
        setRePassword('');
    }

    const handleChange =(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        if (name==='fullName'){
            setFullName(value);
        }
        else if(name==='email'){
            setEmail(email);
        }
        else if(name==='password'){
            setPassword(email);
        }
        else if(name==='rePassword'){
            setRePassword(rePassword);
        }
    }
    
    return (
        <div>
             <div className="register-form">
                    <h2>Register</h2>
                    <form method="POST" >
                        <div className="input-field">
                            <input type="text" name='fullName' value={fullName} onChange={handleChange} required="required"/>
                            <span></span>
                            <label>Full Name</label>
                        </div>
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
                        <div className="input-field">
                            <input type="password" name='rePassword' value={rePassword} onChange={handleChange} required="required"/>
                            <span></span>
                            <label>Retype Password</label>
                        </div>
                        <button type="submit" onClick={(e)=>createUserWithEmailAndPassword(e,email,password)}>Register</button>
                        <div className="login-link">
                            Already Registered?<Link to="/">Log In</Link>
                        </div>
                    </form>
                </div>
        </div>
    )
}
