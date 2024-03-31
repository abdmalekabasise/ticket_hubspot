import { useState } from "react";
import RatingFilter from "./RatingFilter";
import MultiRangeSlider from "./multiRangerSlider/MultiRangeSlider";

const DropdownSelelctBar = ({handleQuantity , quantity , lowPrice , highPrice , handlePrice}) => {
  const [priceValue, setPriceValue] = useState("Price");
  
  const [styleValue, setStyleValue] = useState("Style");

  const handlePriceValueChange = (value) => {
    setPriceValue(value);
  };

  const handleQuantitye = (value) => {
    handleQuantity(value);
  };



  const dropdowns = [
 
    {
      title: "Quantity",
      value: `Quantity : ${quantity}`,
      options : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],

      onChange: handleQuantitye,
    },
    
  ];


  return (
    <>
     <div className="col-auto" >
          <div className="dropdown js-dropdown js-amenities-active">
            <div
              className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              data-bs-offset="0,10"
            >
              <span className="js-dropdown-title">Price range : {lowPrice} - {highPrice}</span>
              <i className="icon icon-chevron-sm-down text-7 ml-10" />
            </div>
            {/* End dropdown__button */}

            <div className="toggle-element -dropdown js-click-dropdown dropdown-menu" >
              <div className="text-15 y-gap-15 js-dropdown-list">
               <MultiRangeSlider
      min={0}
      max={13000}
      onChange={({ min, max }) => handlePrice(min,max)}
      
    />
              </div>
            </div>
            {/* End dropdown-menu */}
          </div>
          {/* End dropdown */}
        </div>
      {dropdowns.map((dropdown, index) => (
        <div className="col-auto" key={index}>
          <div className="dropdown js-dropdown js-amenities-active">
            <div
              className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              data-bs-offset="0,10"
            >
              <span className="js-dropdown-title">{dropdown.value}</span>
              <i className="icon icon-chevron-sm-down text-7 ml-10" />
            </div>
            {/* End dropdown__button */}

            <div className="toggle-element -dropdown js-click-dropdown dropdown-menu" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              <div className="text-15 y-gap-15 js-dropdown-list">
                {dropdown.options.map((item, index) => (
                  <div key={index}>
                    <button
                      className={`${
                        item === dropdown.value ? "text-blue-1 " : ""
                      }d-block js-dropdown-link`}
                      onClick={() => dropdown.onChange(item)}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* End dropdown-menu */}
          </div>
          {/* End dropdown */}
        </div>
      ))}

  

      {/* End  ratings */}

     
      {/* End .col-auto */}
    </>
  );
};

export default DropdownSelelctBar;
