import Navbar from '@/components/Navbar';
import profileDp from '@/public/images/Profile DP.jpg';
import { MdVerified } from "react-icons/md";
import StudentIdPics from '@/public/images/StudentId.png';
import { CiCalendar } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import OriginBookCover from '@/public/images/Origin_Book_Cover-removebg-preview.png';

const Profile = () => {
    const studentProfileInfos = {
        verificationStatus: false,
        studentName: '404',
        schoolMail: '4our0ero.M2204926@futminna.edu.ng',
        studentId: 'M2204926',
        studentProfileDp: profileDp,
        borrowedBooks: [
            {
                bookName: 'Origin',
                writer: 'Dan Brown',
                categories: ['Thriller', 'Suspense'],
                bookCoverImage: OriginBookCover,
                borrowDate: 'Dec 31',
                daysLeft: '4',
            },
            {
                bookName: 'Origin',
                writer: 'Dan Brown',
                categories: ['Thriller', 'Suspense'],
                bookCoverImage: OriginBookCover,
                borrowDate: 'Dec 31',
                daysLeft: '4',
            },
            {
                bookName: 'Origin',
                writer: 'Dan Brown',
                categories: ['Thriller', 'Suspense'],
                bookCoverImage: OriginBookCover,
                borrowDate: 'Dec 31',
                daysLeft: '4',
            },
            {
                bookName: 'Origin',
                writer: 'Dan Brown',
                categories: ['Thriller', 'Suspense'],
                bookCoverImage: OriginBookCover,
                borrowDate: 'Dec 31',
                daysLeft: '4',
            },
        ]
    };

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
                                {
                                    studentProfileInfos.verificationStatus
                                        ?
                                        <div className='verification-status'>
                                            <MdVerified style={{ color: '#FFE1BD' }} />
                                            <p>Verified Student</p>
                                        </div>
                                        :
                                        <div className='verification-status'>
                                            <FcCancel />
                                            <p>Unverified Account</p>
                                        </div>
                                }
                                <h1 className='student-profile-name'>{studentProfileInfos.studentName}</h1>
                                <p className='student-profile-mail'>{studentProfileInfos.schoolMail}</p>
                            </div>
                        </div>
                        <div className='uni-info'>
                            <p>University</p>
                            <h1>FUT Minna</h1>
                        </div>
                        <div className='student-id'>
                            <p>Student ID</p>
                            <h1>{studentProfileInfos.studentId}</h1>
                        </div>
                        <img className='student-id-card' src={StudentIdPics.src} alt="Student Id card" />
                    </div>
                </div>
                <div className='borrowed-books'>
                    <h1 className='borrowed-books-heading'>Borrowed Books</h1>
                    <div className='borrowed-books-container'>
                        {studentProfileInfos.borrowedBooks.map((borrowedBook, i) => {
                            return (
                                <div key={i} className='borrowed-book-container'>
                                    <div className='borrowed-book-image'>
                                        <img src={borrowedBook.bookCoverImage.src} alt="Book Image" />
                                    </div>
                                    <h2>{borrowedBook.bookName} - By {borrowedBook.writer}</h2>
                                    {/* <p className='popular-book-category'>{borrowedBook.category}</p> */}
                                    {borrowedBook.categories.map((category, j) => (
                                        <p className='popular-book-category' key={j}>
                                            {category}
                                            {j < borrowedBook.categories.length - 1 ? ' / ' : ''}
                                        </p>
                                    ))}
                                    <div className='date-et-days'>
                                        <div className='borrow-date'>
                                            <IoBookOutline />
                                            <p>Borrowed on {borrowedBook.borrowDate}</p>
                                        </div>
                                        <div>
                                            <div className='days-left'>
                                                <CiCalendar style={{ color: '#E7C9A5' }} />
                                                <p>{borrowedBook.daysLeft} days left to due</p>
                                            </div>
                                            <IoReceiptOutline className='receipt-btn' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

