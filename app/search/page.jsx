'use client'

import Navbar from '@/components/Navbar';
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { booksFromDB } from '@/utils';
import NoResultsImage from '@/public/images/No Results Image.png'

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
            return nameToBeChecked;
        } else {
            const splittedName = nameToBeChecked.split(' ');
            return `${splittedName[0]}...`;
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

    // Clear Search
    const clearSearch = () => {
        setSearchWord('');
    }

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
                        autoFocus
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearchWord(value);
                            if (value === '') {
                                setSearchResults([]);
                            } else {
                                searchBook(value);
                            }
                        }}
                        type="text"
                    />
                </div>
            </div>

            {/* Search Results Area */}
            <div className='search-results'>
                {searchWord === '' ? (
                    // No search word
                    <h1 className='no-search'>
                        Your <span style={{ color: '#FFE1BD' }}>Search Results</span> Will Be Shown Here
                    </h1>
                ) : searchResults.length === 0 ? (
                    // No results found
                    <div className='no-results'>
                        <p className='search-results-heading'>
                            Search Results for <span style={{ color: '#FFE1BD' }}>{searchWord}</span>
                        </p>
                        <div className='no-results-cta'>
                            <img src={NoResultsImage.src} alt="No resutls found" />
                            <p>No Results Found</p>
                            <p>
                                We couldn’t find any books matching your search. Try using different keywords or check for typos.
                            </p>
                            <button onClick={clearSearch}>Clear Search</button>
                        </div>
                    </div>
                ) : (
                    // Show search results
                    <>
                        <p className='search-results-heading'>
                            Search Results for <span style={{ color: '#FFE1BD' }}>{searchWord}</span>
                        </p>
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
                                            alt="Book cover"
                                        />
                                        <p className='popular-book-name'>
                                            {checkName(searchResult.bookName)} <br /> by - {checkName(searchResult.writer)}
                                        </p>
                                        <p className='popular-book-category'>
                                            {searchResult.categories.map((category, j) => (
                                                <span key={j}>
                                                    {category}
                                                    {j < searchResult.categories.length - 1 ? ' / ' : ''}
                                                </span>
                                            ))}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className='search-results-pagination'>
                                <button
                                    onClick={() => changePage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    className={currentPage === 1 ? 'active' : ''}
                                    onClick={() => changePage(1)}
                                >
                                    1
                                </button>
                                {totalPages > 2 && currentPage > 2 && <span>...</span>}
                                <button
                                    className={currentPage === totalPages ? 'active' : ''}
                                    onClick={() => changePage(totalPages)}
                                >
                                    {totalPages}
                                </button>
                                <button
                                    onClick={() => changePage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
