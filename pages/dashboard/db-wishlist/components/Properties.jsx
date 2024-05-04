import Image from "next/image";
import { hotelsData } from "../../../../data/hotels";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Properties = (props) => {
  const router = useRouter();

  const [tabEvents, setEvents] = useState([])
  const { events } = props;
  useEffect(() => {
    setEvents(events);
  }, [events]);
  const dateConvertion = (date) => {
    const inputDate = new Date(date);

    // Format date to "MMM D" (e.g., "Feb 3")
    const formattedDate = inputDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });
    const dayOfWeek = inputDate.toLocaleString('en-US', { weekday: 'long' });
    const formattedTime = inputDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const result = `${formattedDate} ${dayOfWeek} ${formattedTime}`;
    return result;
  }

  function removeParentheses(inputString) {
    return inputString.replace(/\s*\([^)]*\)/, '');
}

const handleOptionClick = (item) => {
  console.log(item);
  const datePart = item.datetime_local.substring(0, 10);

 router.push(`/event/tickets/${removeParentheses(item.title)}/${datePart}`)
};

  return (

    <>
      {tabEvents.length === 0 ? (
        <div>
          <p>No events available at the moment.</p>
        </div>
      ) : (
        tabEvents.map((item, index) => (
          <div className="col-12" key={index}>
            <div className="row x-gap-20 y-gap-30">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-200 md:w-1/1 rounded-4">
                  <div className="cardImage__content">

                    {item.performers[0].image ? (
                      <Image
                        width={200}
                        height={200}
                        className="rounded-4 col-12 js-lazy"
                        src={item.performers[0].image}
                        alt="image"
                      />
                    ) : (
                      <Image
                        width={200}
                        height={200}
                        className="rounded-4 col-12 js-lazy"
                        src="/img/general/logo-dark.svg"
                        alt="image"
                      />
                    )

                    }
                  </div>

                </div>
              </div>
              {/* End col */}

              <div className="col-md">

                <div className="d-flex x-gap-5 items-center pt-10">
                  <h3 className="text-18 lh-14 fw-500">{removeParentheses(item.title)}</h3>
                </div>

                <div className="row x-gap-10 y-gap-10 items-center pt-20">
                  <div className="col-auto">
                    <p className="text-14">
                      {item.venue.name}, {item.venue.city} {item.venue.state}
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 underline ml-10"
                      >

                      </button>
                    </p>
                  </div>
                  <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1" />
                  </div>
                  <div className="col-auto">

                  </div>
                </div>
                {/* End .row */}

                <div className="row x-gap-10 y-gap-10 pt-20">
                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      {dateConvertion(item.datetime_local)}
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End col */}

              <div className="col-md-auto text-right md:text-left">
                <div className="d-flex flex-column justify-between h-full">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500"></div>
                      <div className="text-14 lh-14 text-light-1">

                      </div>
                    </div>
                    <div className="col-auto">
                      
                        <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1" onClick={() => handleOptionClick(item)} style={{ cursor: 'pointer' }}>
                          <svg width="25px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#0D0D0D" /><path d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z" fill="#0D0D0D" /></svg>
                        </div>
                    

                    </div>
                  </div>
                  {item.stats.lowest_sg_base_price && (
                    <div className="pt-24">
                    <div className="fw-500">Starting from        <span className="fw-500 text-blue-1">${item.stats.lowest_sg_base_price}</span></div>

                    </div>
                  )

                  }
                 
                </div>
              </div>
              {/* End col */}
            </div>
            {/* End .row */}
          </div>
        ))
      )}
    </>
  );
};

export default Properties;
