import { useState, useEffect } from 'react'

import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import MainFilterSearchBox from "../../../components/activity-list/activity-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "../../../components/activity-list/activity-list-v1/TopHeaderFilter";
import ActivityProperties from "../../../components/activity-list/activity-list-v1/ActivityProperties";
import Pagination from "../../../components/activity-list/common/Pagination";
import Sidebar from "../../../components/activity-list/activity-list-v1/Sidebar";
import { useRouter } from 'next/router'
import axios from 'axios';



const index = () => {
    const router = useRouter()
    const { q } = router.query
    const [data, setData] = useState();

    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
      console.log(q);
      async function fetchData() {
        try {
          // Make your API call using Axios
          const response = await axios.get(`https://api.seatgeek.com/2/events/?q=${q}&client_id=Mzk1MDc3NTh8MTcwNTU5NjQ3Ny44MzQyOTg0&per_page=20`);
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

      if(q){
        fetchData();
      }
    
      // Call the fetchData function immediately
    }, [q]); // Include q in the dependency array so useEffect runs when q changes
 
  return (
    <>
      <Seo pageTitle="Search page" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 pb-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              
              {/* End text-center */}
              <MainFilterSearchBox />

              <div className="text-center">
                <h1 className="text-30 fw-600 mt-30">Search results for : {q}</h1>
              </div>
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter a={data?.meta?.total} />
              <div className="mt-20"></div>
              {/* End mt--30 */}
              <div className="row y-gap-2">
                {q && (
                  <ActivityProperties events={data?.events} q={q}/>
                )
                  
                }
                
              </div>
              {/* End .row */}
              <Pagination />
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
