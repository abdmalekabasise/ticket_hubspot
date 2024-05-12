import Image from "next/image";
import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ActivitiesData from "../../../data/activity";
import Link from "next/link";
import { ColorRing ,Oval,ThreeDots} from 'react-loader-spinner'
import axios from 'axios';
import { useRouter } from 'next/router'

const ActivityProperties = ({events , q}) => {
  const router = useRouter()


console.log(events);
  



  const handleViewDetails = (item) => {
    console.log(item);
    const datePart = item.datetime_local.substring(0, 10);
    const name = item.performers[0].name;
    router.push(`/event/tickets/${name}/${datePart}`)
  };
  return (
    <>
      {events?.map((item,index) => (
        <div
          className="col-12"
          key={item?.id}
    
        >
          <div className="border-top-light pt-20">
            <div className="row x-gap-20 y-gap-10">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div >
                   
                  
                      
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12"
                            src={item?.performers[0].image}
                            alt="image"
                          />
                       
                   
                 
                  </div>
                  {/* End .cardImage__content */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>
                  {/* End .cardImage__wishlist */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}
              <div className="col-md">
                <p className="text-14 lh-14 mb-15"></p>
                <h3 className="text-18 lh-16 fw-500">
                  {item?.title}
                  <br />   {new Date(item.datetime_local).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
                </h3>
               
                <div className="text-14 lh-15 fw-500 mt-20">
                  {item?.venue?.name_v2} . {item?.venue?.extended_address}
                </div>
                <div className="text-14 text-green-2 fw-500 lh-15 mt-5">
          
                </div>
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left">
                
                <div className="text-14 text-light-1 mt-50 md:mt-20">From</div>
                <div className="text-22 lh-12 fw-600 mt-5">
                  US${item?.stats?.lowest_price}
                </div>
         {/*
           <ThreeDots
         visible={true}
         height="60"
         width="60"
         color="#0d2857"
         radius="9"
         ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         wrapperClass=""
         />
         */ }
       
              
                  <button
                  onClick={() => handleViewDetails(item)}               
               
                  className="button -md -dark-1 bg-blue-1 text-white mt-24"
                >
                  View Detail <div className="icon-arrow-top-right ml-15" />
                </button>
               
             
       
         
   
              </div>
              {/* End .col-md-auto */}
            </div>
            {/* End .row */}
          </div>
          {/* End border-top */}
        </div>
      ))}
    </>
  );
};

export default ActivityProperties;
