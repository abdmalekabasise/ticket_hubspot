import Image from "next/image";
import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ActivitiesData from "../../../data/activity";
import Link from "next/link";
import { ColorRing, Oval, ThreeDots } from 'react-loader-spinner'
import axios from 'axios';

const ActivityProperties = ({ events, q }) => {
  console.log(q);
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true); // Add loading state



  useEffect(() => {
    console.log('hello');
    async function fetchData() {
      try {
        // Make your API call using Axios
        const response = await axios.get(`http://localhost:8000/stubhubSearch/${q}`);
        const data = response.data;
        console.log(data);
        // Update data state with the fetched events
        setData(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        // Set loading to false after the API call is complete
        setLoading(false);
      }
    }

    // Call the fetchData function immediately
    fetchData();
  }, []);
  return (
    <>
      {events?.map((item) => (
        <div
          className="col-12"
          key={item?.id}

        >
          <div className="border-top-light pt-20">
            <div className="row x-gap-20 y-gap-10">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div >
                    <Swiper
                      className="mySwiper"
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {item?.performers?.map((slide, i) => (
                        <SwiperSlide key={i}>
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={slide.image}
                            alt="image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
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
                {loading ? (
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
                ) : (
                  <Link
                    href={`/activity-single/${item.id}`}
                    className="button -md -dark-1 bg-blue-1 text-white mt-24"
                  >
                    View Detail <div className="icon-arrow-top-right ml-15" />
                  </Link>
                )

                }



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
