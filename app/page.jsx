import Navbar from "@/components/Navbar";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import { IoIosBook } from "react-icons/io";
import BookCover from "@/components/BookCover";
import OriginBookCover from '../public/images/Origin_Book_Cover-removebg-preview.png';

const Home = () => {
  // Fetched Featured Book
  const featuredBook = {
    bookName: 'Origin',
    writer: 'Dan Brwon',
    categories: ['Thriller', 'Suspense'],
    totalBooks: 100,
    availableBooks: 42,
  };

  // Based on what people has borrowed the most
  const popularBooks = [
    {

    }
  ]

  return (
    <div>
      <Navbar />
      <div className='featured-book'>
        <div className='featured-book-details'>
          <h1>{featuredBook.bookName}</h1>
          <p>By <span className='brown-colored'>{featuredBook.writer}</span>&nbsp;&nbsp; Category: {featuredBook.categories.map((category, i) => {
            return (
              <span key={i} className='brown-colored'>{category}{i < featuredBook.categories.length - 1 ? ' / ' : ''}</span>
            )
          })} &nbsp;&nbsp;</p>
          <p>Total books: <span className='brown-colored'>{featuredBook.totalBooks}</span> &nbsp;&nbsp; Available books: <span className='brown-colored'>{featuredBook.availableBooks}</span></p>
          <p>
            Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons.
          </p>
          <Link href='/'>
            <button><IoIosBook /> Borrow Book request</button>
          </Link>
        </div>
        <div className='featured-book-image-container'>
          <img src={OriginBookCover.src} className='featured-book-image' alt="Book Cover" />
          <img className='book-shadow' src={OriginBookCover.src} alt="Book Cover" />
        </div>
      </div>
    </div>
  )
}

export default Home;