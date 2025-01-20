'use client'

import Navbar from '@/components/Navbar';
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { booksFromDB } from '@/utils';

const Search = () => {
    // Current search word will be in here
    const [searchWord, setSearchWord] = useState('');

    // Current page for pagination
    const [currentPage, setCurrentPage] = useState(1);

    // Search Results
    const [searchResults, setSearchResults] = useState([]);

    // Number of books per page
    const booksPerPage = 12;

    const checkName = (nameToBeChecked) => {
        if (nameToBeChecked.length <= 20) {
            return (nameToBeChecked)
        } else {
            const splittedName = nameToBeChecked.split(' ')
            return (`${splittedName[0]}...`)
        }
    };

    const searchBook = (searchWord) => {
        const foundBook = booksFromDB.filter((bookFromDB) => {
            const bookNameIncludes = bookFromDB.bookName.toLowerCase().includes(searchWord.toLowerCase());
            const writerIncludes = bookFromDB.writer.toLowerCase().includes(searchWord.toLowerCase());
            const categoriesIncludes = bookFromDB.categories.some(category => category.toLowerCase().includes(searchWord.toLowerCase()));
            return bookNameIncludes || writerIncludes || categoriesIncludes;
        });
        setSearchResults(foundBook);
    };

    // Total number of pages
    const totalPages = Math.ceil(searchResults.length / booksPerPage);

    // Slice books for current page
    const paginatedBooks = searchResults.slice(
        (currentPage - 1) * booksPerPage,
        currentPage * booksPerPage
    );

    // Handler for changing pages
    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div style={{ marginBottom: '100px' }}>
            <Navbar />
            <div className='search-page-hero'>
                <p>Discover Your Next Great Read:</p>
                <h1>
                    Explore and Search for{' '}
                    <span style={{ color: '#FFE1BD' }}>Any Book</span> In Our Library
                </h1>
                <div>
                    <IoIosSearch className='search-btn' />
                    <input
                        onChange={(e) => {
                            setSearchWord(e.target.value);
                            searchBook(searchWord);
                            setSearchWord(e.target.value);
                            if (e.target.value === '') {
                                setSearchResults([]);
                            } else {
                                searchBook(e.target.value);
                            }
                        }}
                        type="text"
                    />
                </div>
            </div>
            <div className='search-results'>
                <p className='search-results-heading'>Search Results for {searchWord}</p>
                <div className='popular-books'>
                    {paginatedBooks.map((searchResult, i) => {
                        return (
                            <Link
                                href={`/bookdetails/${searchResult.bookId}`}
                                key={i}
                                className='popular-book'
                            >
                                <img
                                    className='popular-book-image'
                                    src={searchResult.bookCoverImage.src}
                                    alt="The cover of the book Origin"
                                />
                                <p className='popular-book-name'>
                                    {checkName(searchResult.bookName)} <br /> by - {checkName(searchResult.writer)}
                                </p>
                                <p className='popular-book-category'>
                                    {searchResult.categories.map((category, j) => {
                                        return (
                                            <span key={j}>
                                                {category}
                                                {j < searchResult.categories.length - 1 ? ' / ' : ''}
                                            </span>
                                        );
                                    })}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
            {/* Pagination */}
            <div className='search-results-pagination'>
                {totalPages > 1 && (
                    <>
                        {/* Previous Button */}
                        <button
                            onClick={() => changePage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FaChevronLeft />
                        </button>

                        {/* First Page */}
                        <button
                            className={currentPage === 1 ? 'active' : ''}
                            onClick={() => changePage(1)}
                        >
                            {currentPage}
                        </button>

                        {/* Dots */}
                        {totalPages > 1 && <span>...</span>}

                        {/* Last Page */}
                        {totalPages > 1 && (
                            <button
                                className={currentPage === totalPages ? 'active' : ''}
                                onClick={() => changePage(totalPages)}
                            >
                                {totalPages}
                            </button>
                        )}

                        {/* Next Button */}
                        <button
                            onClick={() => changePage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <FaChevronRight />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;


// Search Results (Dummy Data)
// const searchResults = Array(100).fill().map((_, i) => ({
//     bookId: `${1234 + i}`,
//     bookName: `Book ${i + 1}`,
//     writer: `Author ${i + 1}`,
//     categories: ['Academic', 'Research'],
//     bookCoverImage: OriginBookCover,
// }));