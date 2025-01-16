'use client'

import libraryLogo from '@/public/images/library-logo.png';
import '../../styles/globals.css';
import BookCollectionImg from '@/public/images/Book Collection Edit.jpg'
import { LuEye, LuEyeOff, LuFileUp } from "react-icons/lu";
import { useState } from 'react';

const SignUp = () => {

  // Determine to displaying Password and Student ID or not
  const [displaySecret, setDisplaySecret] = useState(true);

  // Fetch Featured Image
  const signUpFeaturedImg = BookCollectionImg;

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
          <h1>Create Your Library Account</h1>
          <p>Please complete all fields and upload a valid university ID to gain access to the library</p>
        </div>
        <form autoComplete='off'>
          <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder='Name as on student ID card' autoFocus required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter school mail' required />
          </div>
          <div>
            <label htmlFor="schoolId">University ID Number</label>
            <div style={{ position: 'relative' }}>
              <input type={displaySecret ? 'password' : 'text'} name="schoolId" id="schoolId" placeholder='e.g M2204926' required 
                style={{ paddingRight: '40px' }} />
              {displaySecret ? <LuEye
                onClick={toggleDisplaySecret} className='password-option' /> : <LuEyeOff
                onClick={toggleDisplaySecret} className='password-option' />
              }
            </div>
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
          <div className='file-upload'>
            <p>Upload University ID Card (file upload)</p>
            <label htmlFor="idCardImage" style={{ cursor: 'pointer', display: 'inline-block', padding: '15px 20px', backgroundColor: '#232839', borderRadius: '5px', textAlign: 'center', fontFamily: 'IBMPlexSansLight' }}>
              <span style={{ color: '#D6E0FF' }}><LuFileUp /> Upload ID</span>
            </label>
            <input type="file" name="idCardImage" id="idCardImage" accept="image/*" style={{ display: 'none' }} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className='login-option'>Have an account already? <a href="/login">Login</a></p>
      </div>
      <div className='featrued-image-container'>
        <img src={signUpFeaturedImg.src}
          className='sign-in-featured-image'
          alt="Featured Image of Books" />
      </div>
    </div>
  )
}

export default SignUp;