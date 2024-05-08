import { useState, useEffect } from 'react'
import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

const SearchBar = ({handleSearch,locationSearchContent}) => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
 // const [locationSearchContent, setLocationSearchContent] = useState([]);


  const handleOptionClick = (item) => {
    console.log(item);
    const datePart = item.datetime_local.substring(0, 10);
    const performer = item.performers[0].name;
    router.push(`/event/tickets/${performer}/${datePart}`)
  };

  const handleInput = (item) => {
    console.log(item);
    handleSearch(item)
    setSearchValue(item);
 
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
       
          <div className="text-15 text-light-1 ls-2 lh-16 col-12">
            <input
              autoComplete="off"
              type="search"
              placeholder="What do you want to see live?"
              className="js-search js-dd-focus"
              
              onChange={(e) => handleInput(e.target.value)}
            />
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
            {loading && <div className="loader">Loading...</div>}
              {locationSearchContent.slice(0, 5).map((item,index) => (
                
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={index}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.title}
                      </div>
                      
                      <div className="text-14 lh-12 text-light-1 mt-5">
          {/* Use toLocaleString to format the date and time */}
          {new Date(item.datetime_local).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
