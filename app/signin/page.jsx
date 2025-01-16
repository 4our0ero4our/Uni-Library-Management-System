'use client'

import libraryLogo from '@/public/images/library-logo.png';
import '../../styles/globals.css';
import BookCollectionImg from '@/public/images/Book Collection Edit.jpg'
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from 'react';

const Login = () => {

    // Determine to displaying Password and Student ID or not
    const [displaySecret, setDisplaySecret] = useState(true);
    
    // Fetch Featured Image
    const signInFeaturedImg = BookCollectionImg;

    // Toggles Users' preference in displaying password and Student ID 
    const toggleDisplaySecret = () => {
        setDisplaySecret(!displaySecret)
    };

    return (
        <div className='sign-in-page'>
            <div className='sign-in-container'>
                <div className='uni-name'>
                    <img src={libraryLogo.src} alt="" />
                    <p>Uni Library Services</p>
                </div>
                <div className='page-details'>
                    <h1>Welcome Back to the Uni Library</h1>
                    <p>Access the vast collection of resources, and stay updated</p>
                </div>
                <form autoComplete='off'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter school mail' autoFocus required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input type={displaySecret ? 'password' : 'text'} name="password" id="password" placeholder='At least 8 characters long' required
                                style={{ paddingRight: '40px' }} />
                            {displaySecret ? <LuEye
                                onClick={toggleDisplaySecret} className='password-option' /> : <LuEyeOff
                                onClick={toggleDisplaySecret} className='password-option' />
                            }
                        </div>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <p className='login-option'>Don't have an account already? <a href="/login">Register here</a></p>
            </div>
            <div className='featrued-image-container'>
                <img src={signInFeaturedImg.src}
                    className='sign-in-featured-image'
                    alt="Featured Image of Books" />
            </div>
        </div>
    )
}

export default Login