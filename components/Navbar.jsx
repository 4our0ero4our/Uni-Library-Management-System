'use client'
import Librarylogo from '@/public/images/library-logo.png';
import '@/styles/globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { IoExitOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";

const Navbar = () => {

    // Fetch User Info
    const [userInfo, setUserInfo] = useState({
        userId: 1234,
        name: 'Username',
        email: 'muhammed@gmail.com',
    });

    const [hamburgerState, setHamburgerState] = useState(false);

    const handleHamburgerState = () => {
        setHamburgerState(!hamburgerState);
    }

    return (
        <nav>
            <div className='nav-uni-name'>
                <img src={Librarylogo.src} alt="A book" />
                <p>Uni Library Services</p>
            </div>
            <div className='desktop-nav'>
                <Link href={'/'}>Home</Link>
                <Link href={'/search'}>Search</Link>
                <Link className='profile-link' href={`/profile/${userInfo.userId}`}>
                    {userInfo.name}
                </Link>
                <Link href={'/'}>
                    <IoExitOutline style={{ color: '#FF5969', rotate: '180deg' }} />
                </Link>
            </div>
            <div className='mobile-nav'>
                <div className='mobile-navigations'>
                    <div className='mobile-nav-uni-name'>
                        <img src={Librarylogo.src} alt="A book" />
                        <p>Uni Library Services</p>
                    </div>
                    {
                        !hamburgerState && <GiHamburgerMenu className='hamburger-menu' onClick={handleHamburgerState} />
                    }
                    {
                        hamburgerState
                        &&
                        <div className='mobile-nav-links'>
                            <GiCancel style={{alignSelf:'end', position:'absolute', top:'30px', right:'30px', fontSize:'25px', color:'#fff', cursor:'pointer'}} onClick={handleHamburgerState} />
                            <Link href={'/'}>Home</Link>
                            <Link href={'/search'}>Search</Link>
                            <Link className='profile-link' href={`/profile/${userInfo.userId}`}>
                                {userInfo.name}
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;