import { useState } from "react";
import DateSearch from "../common/DateSearch";
import LocationSearch from "./LocationSearch";
import axios from 'axios';
import Router from "next/router";

const MainFilterSearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [locationSearchContent, setLocationSearchContent] = useState([]);

  const handleSearch = async  (item) => {

    setSearchValue(item);
    console.log(item);
    setLoading(true);

    try {
      // Make your API call using Axios
      const response = await axios.get(`https://api.seatgeek.com/2/events/?q=${searchValue}&client_id=Mzk1MDc3NTh8MTcwNTU5NjQ3Ny44MzQyOTg0`);
      const data = response.data;
      console.log(data);
      // Update locationSearchContent with the fetched data
      setLocationSearchContent(data.events);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      // Set loading to false after the API call is complete
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mainSearch -col-2 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30">
        <div className="button-grid items-center">
          <LocationSearch handleSearch={handleSearch} locationSearchContent={locationSearchContent}/>
          {/* End Location */}

         
          {/* End check-in-out */}

          <div className="button-item">
            <button className="mainSearch__submit button -dark-1 py-20 px-40 col-12 rounded-4 bg-blue-1 text-white"
              onClick={() => Router.push(`/search/q/${searchValue}`)}

            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
