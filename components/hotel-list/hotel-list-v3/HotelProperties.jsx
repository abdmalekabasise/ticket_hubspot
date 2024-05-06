import { hotelsData } from "../../../data/hotels";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const HotelProperties = ({data , urlStubhub , urlVividseats , urlGameTimes , quantity}) => {
  console.log(data);
  const handlePriceVividseat = (value) =>{
    // Convert the value to a floating-point number
    const floatValue = parseFloat(value);
    
    // Check if the value is a valid number
    if (!isNaN(floatValue)) {
      // Convert the float to a string without the decimal part
      return floatValue.toFixed(0);
    } else {
      // If the value is not a valid number, return the original value
      return value;
    }
  }
  return (
    <>
      {data.map((item,index) => (

        <div className="col-12" key={index}>
          <div className="border-top-light pt-20">

            {
              item.delivery_type && (
                <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-2:1 w-230  md:w-1/1">
                    <div className="cardImage__content custom_inside-slider">
                     
                          <SwiperSlide >
                            <Image
                              width={200}
                              height={200}
                              src={item?.view_url}
                              alt="image"
                              className="w-100"
                            />
                          </SwiperSlide>
                      
                    
                    </div>
                    {/* End image */}
  
                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End .col */}
  
                <div className="col-md">
                  <h3 className="text-16 lh-17 fw-500">
                  Section {item?.section}, Row {item.row}
                
                  </h3>
  
  
                 
                </div>
                {/* End .col-md */}
  
                <div className="col-md-auto text-right md:text-left">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Gametime.co</div>
                    
                    </div>
                  
                  </div>
                  {/* End .row */}
  
                  <div className="text-14 text-light-1 mt-20 lg:mt-50 md:mt-24">
                  
                    <span className="text-22 lh-12 fw-600 text-dark-1 ml-5">
                      US${item?.price.prefee/100}
                    </span>
                  </div>
  
                  <Link
                    href={`${urlGameTimes}/listings/${item.id}?zoom=9`}
                    className="button py-10 px-20 -dark-1 bg-blue-1 text-white mt-10" target="_blank"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              )
            }

            {
              item.r && (
                <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-1:1 w-180  md:w-1/1 rounded-5">
                    <div className="cardImage__content custom_inside-slider">
                     
                        
                          <SwiperSlide >
                            <Image
                              width={200}
                              height={200}
                              src={'https://d2o50i5c2dr30a.cloudfront.net/909d748d-709e-420c-95e8-a6b143385268.jpg'}
                              alt="image"
                              className="w-100"
                            />
                          </SwiperSlide>
                      
                    
                    </div>
                    {/* End image */}
  
                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End .col */}
  
                <div className="col-md">
                  <h3 className="text-16 lh-17 fw-500">
                  Section {item?.d}, Row {item.r}
                
                  </h3>
  
  
                 
                </div>
                {/* End .col-md */}
  
                <div className="col-md-auto text-right md:text-left">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Vividseats.com</div>
                    
                    </div>
                  
                  </div>
                  {/* End .row */}
  
                  <div className="text-14 text-light-1 mt-20 lg:mt-50 md:mt-24">
                  
                    <span className="text-22 lh-12 fw-600 text-dark-1 ml-5">
                      US${handlePriceVividseat(item.p)}
                    </span>
                  </div>
  
                  <Link
                    href={`${urlVividseats}?showDetails=${item.i}&groupId=&qty=${quantity}`}
                    className="button py-10 px-20 -dark-1 bg-blue-1 text-white mt-10" target="_blank"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              )
            }

{
              item.EventId && (
                <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-1:1 w-180 md:w-1/1 rounded-5">
                    <div className="cardImage__content custom_inside-slider">
                     
                        
                          <SwiperSlide >
                            <Image
                              width={200}
                              height={200}
                              src={item?.SvgMapPngUrl}
                              alt="image"
                              className="w-100"
                            />
                          </SwiperSlide>
                      
                    
                    </div>
                    {/* End image */}
  
                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End .col */}
  
                <div className="col-md">
                  <h3 className="text-16 lh-17 fw-500">
                  Section {item?.Section}, Row {item.Row}
                
                  </h3>
  
  
                 
                </div>
                {/* End .col-md */}
  
                <div className="col-md-auto text-right md:text-left">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Stubhub.com</div>
                    
                    </div>
                  
                  </div>
                  {/* End .row */}
  
                  <div className="text-14 text-light-1 mt-20 lg:mt-50 md:mt-24">
                  
                    <span className="text-22 lh-12 fw-600 text-dark-1 ml-5">
                      US{item.Price}
                    </span>
                  </div>
  
                  <Link
                    href={`${urlStubhub}?quantity=${quantity}&listingId=${item.Id}`}
                    className="button py-10 px-20 -dark-1 bg-blue-1 text-white mt-10" target="_blank"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              )
            }
           
            {/* End .row */}
          </div>
          {/* End broder-top-light */}
        </div>
        // End .col-12


      ))}
    </>
  );
};

export default HotelProperties;
