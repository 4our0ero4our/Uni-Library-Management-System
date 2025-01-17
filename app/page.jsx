import Navbar from "@/components/Navbar";
import Link from "next/link";
import { IoIosBook } from "react-icons/io";
import OriginBookCover from '../public/images/Origin_Book_Cover-removebg-preview.png';

const Home = () => {
  // Fetched Featured Book
  const featuredBook = {
    bookName: 'Origin',
    writer: 'Dan Brown',
    categories: ['Thriller', 'Suspense'],
    totalBooks: 100,
    availableBooks: 42,
    bookCoverImage: OriginBookCover,
  };

  // Top 5 most borrowed books will be displayed according to the data from the backend. There will be some default 
  const popularBooks = [
    {
      bookName: 'Origin',
      writer: 'Dan Brown',
      categories: ['Thriller', 'Suspense'],
      bookCoverImage: OriginBookCover,
    },
    {
      bookName: 'Origin',
      writer: 'Dan Brown',
      categories: ['Thriller', 'Suspense'],
      bookCoverImage: OriginBookCover,
    },
    {
      bookName: 'Origin',
      writer: 'Dan Brown',
      categories: ['Thriller', 'Suspense'],
      bookCoverImage: OriginBookCover,
    },
    {
      bookName: 'Origin',
      writer: 'Dan Brown',
      categories: ['Thriller', 'Suspense'],
      bookCoverImage: OriginBookCover,
    },
    {
      bookName: 'Origin',
      writer: 'Dan Brown',
      categories: ['Thriller', 'Suspense'],
      bookCoverImage: OriginBookCover,
    },
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
          <img src={featuredBook.bookCoverImage.src} className='featured-book-image' alt="Book Cover" />
          <img className='book-shadow' src={featuredBook.bookCoverImage.src} alt="Book Cover" />
        </div>
      </div>
      <div className='popular-books-container'>
        <h1>Popular Books</h1>
        <div className='popular-books'>
          {
            popularBooks.map((popularBook, i) => {
              return (
                <div key={i} className='popular-book'>
                  <img className='popular-book-image' src={popularBook.bookCoverImage.src} alt="The cover of the book Origin" />
                  <p className='popular-book-name'>{popularBook.bookName} by {popularBook.writer}</p>
                  <p className='popular-book-category'>
                    {popularBook.categories.map((category, j) => {
                      return (
                        <span key={j}>{category}{j < popularBook.categories.length - 1 ? ' / ' : ''}</span>
                      )
                    })}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;