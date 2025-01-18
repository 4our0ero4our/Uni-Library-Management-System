import Navbar from '@/components/Navbar';
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    const searchResults = [
        {

        },
    ];

    return (
        <div>
            <Navbar />
            <div className='search-page-hero'>
                <p>Discover Your Next Great Read:</p>
                <h1>Explore and Search for <span style={{color:'#FFE1BD'}}>Any Book</span> In Our Library</h1>
                <div>
                    <IoIosSearch className='search-btn'/>
                    <input type="text" />
                </div>
            </div>
            {/* <div className='search-results'>
                <div>
                    <p>Search Results</p>
                    <div>
                        Filter by:
                            <select name="filter" id="">Department</select>
                    </div>
                </div>
                <div></div>
            </div> */}
        </div>
    )
}

export default Search;