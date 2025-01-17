import Navbar from '@/components/Navbar';
import Link from "next/link";
import { IoIosBook } from "react-icons/io";
import OriginBookCover from '../../../public/images/Origin_Book_Cover-removebg-preview.png';

const BookDetails = () => {
    // Fetch a book corresponding to the id in the route
    const specificBook = {
        bookName: 'Origin',
        writer: 'Dan Brown',
        categories: ['Thriller', 'Suspense'],
        totalBooks: 100,
        availableBooks: 42,
        bookCoverImage: OriginBookCover,
        similarBooks: [OriginBookCover, OriginBookCover, OriginBookCover, OriginBookCover, OriginBookCover, OriginBookCover],
        bookDetails:'Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons.',
        bookSummary: 'People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances. People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances. People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.'
    };

    // Dynamic boolean value based on whether a video is available for a book or not
    const bookVideoInfo = true;

    return (
        <div>
            <Navbar />
            <div className='featured-book'>
                <div className='featured-book-details'>
                    <h1>{specificBook.bookName}</h1>
                    <p>By <span className='brown-colored'>{specificBook.writer}</span>&nbsp;&nbsp; Category: {specificBook.categories.map((category, i) => {
                        return (
                            <span key={i} className='brown-colored'>{category}{i < specificBook.categories.length - 1 ? ' / ' : ''}</span>
                        )
                    })} &nbsp;&nbsp;</p>
                    <p>Total books: <span className='brown-colored'>{specificBook.totalBooks}</span> &nbsp;&nbsp; Available books: <span className='brown-colored'>{specificBook.availableBooks}</span></p>
                    <p>{specificBook.bookDetails}</p>
                    <Link href='/'>
                        <button><IoIosBook /> Borrow Book request</button>
                    </Link>
                </div>
                <div className='featured-book-image-container'>
                    <img src={specificBook.bookCoverImage.src} className='featured-book-image' alt="Book Cover" />
                    <img className='book-shadow' src={specificBook.bookCoverImage.src} alt="Book Cover" />
                </div>
            </div>
            <div className='specific-book-details'>
                <div className='abcd'>
                    {
                        bookVideoInfo
                        &&
                        <span>
                            <h1>Video</h1>
                            <video
                                className='book-video'
                                controls
                                loop
                                muted
                                src='/videos/book video.mp4'
                            >
                                Your browser does not support the video tag.
                            </video>
                        </span>
                    }
                    <h1>Summary</h1>
                    <p>
                        {specificBook.bookSummary}
                    </p>
                </div>
                <div className='similar-books'>
                    <h1>More Similar Books</h1>
                    <div className='popular-books'>
                        {
                            specificBook.similarBooks.map((similarBook, i) => {
                                return (
                                    <div key={i} className='similar-book'>
                                        <img className='similar-book-image' src={similarBook.src} alt="The cover of the book Origin" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;