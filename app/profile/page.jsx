import Navbar from '@/components/Navbar';
import profileDp from '@/public/images/Profile DP.jpg';
import { MdVerified } from "react-icons/md";
import StudentId from '@/public/images/StudentId.png';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className='profile-container'>
                <div className='student-info'>
                    <div className='info-tag'>
                        <div></div>
                    </div>
                    <div className='main-info-container'>
                        <div className='profile-details'>
                            <img src={profileDp.src} className='profile-img' alt="Profile picture" />
                            <div className='profile-details-info'>
                                <div className='verification-status'>
                                    <MdVerified style={{ color: '#FFE1BD' }} />
                                    <p>Verified Student</p>
                                </div>
                                <h1>404</h1>
                                <p>4our0ero.M2204926@futminna.edu.ng</p>
                            </div>
                        </div>
                        <div>
                            <p>University</p>
                            <h1>FUT Minna</h1>
                        </div>
                        <div>
                            <p>Student ID</p>
                            <h1>M2204926</h1>
                        </div>
                        <img src={StudentId.src} alt="Student Id card" />
                    </div>
                </div>
                <div className='borrowed-books'>

                </div>
            </div>
        </div>
    )
}

export default Profile;