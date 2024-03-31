import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import blogsData from "../../data/blogs";
import BlogPagination from "./BlogPagination";

const Blog1 = () => {
  const [filterOption, setFilterOption] = useState("art_culture");
  const filterOptions = [
    { label: "Stubhub.com", value: "art_culture" },
    { label: "Seatgeak.com", value: "beaches" },
    { label: "Vividseats", value: "adventure_travel" },
    { label: "Explore", value: "explore" },
   
    // add more options as needed
  ];

  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
          {filterOptions.map((option) => (
            <div className="col-auto" key={option.value}>
              <button
                className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
                  filterOption === option.value ? "is-tab-el-active" : ""
                }`}
                onClick={() => setFilterOption(option.value)}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
        {/* End tab-controls */}

  
        {/* End .row */}


      </div>
    </>
  );
};

export default Blog1;
