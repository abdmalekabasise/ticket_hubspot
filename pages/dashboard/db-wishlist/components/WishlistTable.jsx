import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import Properties from "./Properties";
import { getEventsByEquipe } from "../../../../data/api";

const WishlistTable = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [events, setEvents] = useState([]);
  const { equipe } = props;
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const getEvents = async (e) => {
    await getEventsByEquipe(equipe).then((response) => {
      setEvents(response.data.events);
      console.log(response.data);
    });
  }
  useEffect(() => {
    console.log(props);
    try {
      if (equipe)
        getEvents(equipe);

    } catch (e) {
      console.log("error:::::", e);
    }



  }, [equipe])

  const tabItems = [
    "Hotel",
    "Tour",
    "Activity",
    "Holiday Rental",
    "Cars",
    "Cruiser",
  ];

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">

        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="row y-gap-20">
              <Properties events={events} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default WishlistTable;
