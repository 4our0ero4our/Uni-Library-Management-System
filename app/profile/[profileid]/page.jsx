import Navbar from '@/components/Navbar';
import profileDp from '@/public/images/Profile DP.jpg';
import { MdVerified } from "react-icons/md";
import StudentId from '@/public/images/StudentId.png';
import BookImage from '@/public/images/Origin_Book_Cover-removebg-preview.png';
import { CiCalendar } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";

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
                                <h1 className='student-profile-name'>404</h1>
                                <p className='student-profile-mail'>4our0ero.M2204926@futminna.edu.ng</p>
                            </div>
                        </div>
                        <div className='uni-info'>
                            <p>University</p>
                            <h1>FUT Minna</h1>
                        </div>
                        <div className='student-id'>
                            <p>Student ID</p>
                            <h1>M2204926</h1>
                        </div>
                        <img className='student-id-card' src={StudentId.src} alt="Student Id card" />
                    </div>
                </div>
                <div className='borrowed-books'>
                    <h1 className='borrowed-books-heading'>Borrowed Books</h1>
                    <div className='borrowed-books-container'>
                        <div className='borrowed-book-container'>
                            <div className='borrowed-book-image'>
                                <img src={BookImage.src} alt="Book Image" />
                            </div>
                            <h2>The Origin - By Dan Brown</h2>
                            <p className='popular-book-category'>Thriller / Mystery</p>
                            <div className='date-et-days'>
                                <div className='borrow-date'>
                                    <IoBookOutline />
                                    <p>Borrowed on Dec 31</p>
                                </div>
                                <div>
                                    <div className='days-left'>
                                        <CiCalendar style={{ color: '#E7C9A5' }} />             <p>04 days left to due</p>
                                    </div>
                                    <IoReceiptOutline className='receipt-btn' />
                                </div>
                            </div>
                        </div>
                        <div className='borrowed-book-container'>
                            <div className='borrowed-book-image'>
                                <img src={BookImage.src} alt="Book Image" />
                            </div>
                            <h2>The Origin - By Dan Brown</h2>
                            <p className='popular-book-category'>Thriller / Mystery</p>
                            <div className='date-et-days'>
                                <div className='borrow-date'>
                                    <IoBookOutline />
                                    <p>Borrowed on Dec 31</p>
                                </div>
                                <div>
                                    <div className='days-left'>
                                        <CiCalendar style={{ color: '#E7C9A5' }} />             <p>04 days left to due</p>
                                    </div>
                                    <IoReceiptOutline className='receipt-btn' />
                                </div>
                            </div>
                        </div>
                        <div className='borrowed-book-container'>
                            <div className='borrowed-book-image'>
                                <img src={BookImage.src} alt="Book Image" />
                            </div>
                            <h2>The Origin - By Dan Brown</h2>
                            <p className='popular-book-category'>Thriller / Mystery</p>
                            <div className='date-et-days'>
                                <div className='borrow-date'>
                                    <IoBookOutline />
                                    <p>Borrowed on Dec 31</p>
                                </div>
                                <div>
                                    <div className='days-left'>
                                        <CiCalendar style={{ color: '#E7C9A5' }} />             <p>04 days left to due</p>
                                    </div>
                                    <IoReceiptOutline className='receipt-btn' />
                                </div>
                            </div>
                        </div>
                        <div className='borrowed-book-container'>
                            <div className='borrowed-book-image'>
                                <img src={BookImage.src} alt="Book Image" />
                            </div>
                            <h2>The Origin - By Dan Brown</h2>
                            <p className='popular-book-category'>Thriller / Mystery</p>
                            <div className='date-et-days'>
                                <div className='borrow-date'>
                                    <IoBookOutline />
                                    <p>Borrowed on Dec 31</p>
                                </div>
                                <div>
                                    <div className='days-left'>
                                        <CiCalendar style={{ color: '#E7C9A5' }} />             <p>04 days left to due</p>
                                    </div>
                                    <IoReceiptOutline className='receipt-btn' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

