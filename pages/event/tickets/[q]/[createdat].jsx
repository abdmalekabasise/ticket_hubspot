import { useRouter } from "next/router";
import Seo from "../../../../components/common/Seo";
import Header11 from "../../../../components/header/header-11";
import DropdownSelelctBar from "../../../../components/hotel-list/common/DropdownSelelctBar";
import MapPropertyFinder from "../../../../components/hotel-list/common/MapPropertyFinder";
import Pagination from "../../../../components/hotel-list/common/Pagination";
import HotelProperties from "../../../../components/hotel-list/hotel-list-v3/HotelProperties";
import TopHeaderFilter from "../../../../components/activity-list/activity-list-v1/TopHeaderFilter";
import Blog1 from "../../../../components/blog/Blog1";
import { useEffect, useState } from "react";
import axios from "axios";
import { ColorRing ,Oval,ThreeDots} from 'react-loader-spinner'


const Index = () => {
    const router = useRouter()
    const createdat = router.query.createdat;

    const q = router.query.q ;
    const [dataStubhub, setDataStubhub] = useState([]);
    const [TicketsStubhub, setTicketsStubhub] = useState([]);
    const [dataFiltredStubhub, setDataFiltreStubhub] = useState([]);




    const [TicketsVividseats, setTicketsVividseats] = useState([]);
    const [dataVividseats, setDataVividseats] = useState([]);
    const [dataFiltredVividseats, setDataFiltredVividseats] = useState([]);

  
    const [TicketsGameTimes, setTicketsGameTimes] = useState([]);
    const [dataGameTimes, setDataGameTimes] = useState([]);
    const [dataFiltredGameTimes, setDataFiltredGameTimes] = useState([]);

    const [quantity, setQuantity] = useState('2');

    const [loading, setLoadingStubhub] = useState(true); // Add loading state
    const [loadingVividseats, setLoadingVividseats] = useState(true); // Add loading state
    const [loadingAll, setLoadingAll] = useState(0);
    const [loadingSpin, setLoadingSpin] = useState(true); // Add loading state

    const [mergedData, setMergedData] = useState([]);

    const [urlVividseats, setUrlVividseats] = useState('');
    const [urlStubhub, setUrlStubhub] = useState('');
    const [urlGameTimes, setUrlGameTimes] = useState('');


    const [lowPrice, setLowPrice] = useState(0);
    const [highPrice, setHighPrice] = useState(10000);

    const [sortQ, setSortQ] = useState('asc');

    const [mapUrl, setMapUrl] = useState('');


    useEffect(() => {
      async function fetchDataStubhub() {
        try {
          // Make your API call using Axios
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stubhubSearch/${q}`);
          const data = response.data;


          const filteredItems = data.json.items.filter(item => {
            // Destructure the necessary properties from the item
            const { formattedDate, dayOfWeek } = item;
          
            // Get the current year
            const currentYear = new Date().getFullYear();
          
            // Map month abbreviation to month number
            const monthMap = {
              "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
              "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
            };
          
            // Extract month and day from formattedDate
            const [monthAbbreviation, dayString] = formattedDate.split(" ");
          
            // Get the month number from the abbreviation
            const month = monthMap[monthAbbreviation];
          
            // Parse day as a number
            const day = parseInt(dayString, 10);
          
            // Construct the date object with the current year, month, and day
            const date = new Date(currentYear, month, day);
          
            // Add one day to the date
            date.setDate(date.getDate() + 1);
          
            // Get the ISO string representation of the date
            const isoDateString = date.toISOString().split('T')[0];
          
            // Return true if isoDateString is "2024-03-02", otherwise false
            return isoDateString === createdat;
          });


          console.log(filteredItems);
          
          if(filteredItems.length>0){
            setDataStubhub(filteredItems);
            setUrlStubhub(`https://www.stubhub.com${filteredItems[0].url}`)
          }          
          
          // Update data state with the fetched events
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          // Set loading to false after the API call is complete
          setLoadingStubhub(false);
        }
      }
  
      async function fetchDataVividseats() {
        try {
          // Make your API call using Axios
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/vividseatsSearch/${q}`);
          const data = response.data;
          console.log(data.json.items[1].localDate);
      
            const filteredItems = data.json.items.filter(item => {
              const date = item.localDate.substring(0, 10);

        
              return date === createdat;
          })

          console.log(filteredItems);
          if(filteredItems.length>0){
            setDataVividseats(filteredItems);
            setUrlVividseats(`https://www.vividseats.com${filteredItems[0].organicUrl}`)

          }    
          // Update data state with the fetched events
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          // Set loading to false after the API call is complete
          setLoadingVividseats(false);
        }
      }

      async function fetchDataGameTimes() {
        try {
          // Make your API call using Axios
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/gametimeSearch/${q}`);
          const data = response.data;
      console.log(data);
            const filteredItems = data.events.filter(item => {
              const date = item.event.datetime_local.substring(0, 10);

        
              return date === createdat;
          })

          console.log(filteredItems);
          if(filteredItems.length>0){
            console.log('yessssssss');
            setDataGameTimes(filteredItems);

          }    
          function generateURL(eventData) {
            const date = new Date(eventData.event.datetime_local);
            const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
            const venueCity = eventData.venue.city.replace(/\s/g, '-').toLowerCase();
            const state = eventData.venue.state.toLowerCase();

            const venueName = eventData.venue.name.replace(/\s/g, '-').toLowerCase();
            const eventName1 = eventData.performers[1].short_name.toLowerCase();
            const eventName2= eventData.performers[0].short_name.toLowerCase();

            const eventId = eventData.event.id;
            const category = eventData.event.category.replace(/\s/g, '-').toLowerCase(); // Extracting category dynamically
            const venue_config = eventData.event.venue_config.toLowerCase(); // Extracting category dynamically
            const searrch= q.replace(/\s/g, '-').toLowerCase();

            const url = `/${category}-${venue_config}/${eventName1}-at-${eventName2}-tickets/${formattedDate}-${state}-${venueCity}-${venueName}/events/${eventId}?q=${searrch}`;
            const url2 = `/${category}-${venue_config}/${eventName1}-at-${eventName2}-tickets/${formattedDate}-${venueCity}-${state}-${venueName}/events/${eventId}`;
            setUrlGameTimes(`https://gametime.co${url2}`);

            return url;
        }
        const url = generateURL(filteredItems[0]);
        console.log(url);
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/getTicketsGametimes`, { url: `https://gametime.co${url}` });
          const data = response.data;
          setTicketsGameTimes(data.redux.data.listings);
          let item='1';
          console.log(data.redux.data.listings.displayGroupList[item][0]); 
          console.log(data.redux.data.listings);

          function filterGametime(data) {

            const filteredData = [];

            data.displayGroupList[quantity].forEach(item => {
             // setTicketsStubhub(prevTickets => [...prevTickets, ...allTickets]);
             const listingData = data.allListings[item];
             filteredData.push(listingData);
          });
          setDataFiltredGameTimes(filteredData);

            console.log(filteredData);
          }      
          filterGametime(data.redux.data.listings);

        } catch (error) {
          console.error('Error fetching search results:', error);
        }  finally {
          // Set loading to false after the API call is complete

        }
          // Update data state with the fetched events
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          // Set loading to false after the API call is complete
          setLoadingVividseats(false);
          setLoadingAll(prevLoadingAll => prevLoadingAll + 1);

        }
      }

    
      // Call the fetchData function immediately
      if(createdat){
        fetchDataStubhub();
        fetchDataVividseats();
        fetchDataGameTimes();
      }
     
    }, [createdat]);


    useEffect(() => {

      const fetchData = async (totalPageCount) => {
        try {
          // Assuming you have this information available
          const promises = [];
  
          // Start fetching data from page 2 to the last page
          for (let i = 1; i <= totalPageCount; i++) {
         
            const body=  {
              url:`https://www.stubhub.com${dataStubhub[0].url}`,
              CurrentPage: i,
              PageSize: 50,
              ShowAllTickets: true

          }
  
            const promise = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/stubhubSearchTickets`, body);
            promises.push(promise);
          }
  
          // Wait for all requests to resolve
          const responses = await Promise.all(promises);
  
          // Process the responses
          const allTickets = responses.reduce((acc, response) => {
            const { data } = response;
            return acc.concat(data.Items);
          }, []);

          const filteredArray = allTickets.filter(obj => obj.AvailableQuantities.includes(parseInt(quantity)));

          setDataFiltreStubhub(filteredArray);
          console.log(filteredArray);
  
          // Update state with all tickets
          setTicketsStubhub(prevTickets => [...prevTickets, ...allTickets]);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          // Set loading to false after the API call is complete
          setLoadingAll(prevLoadingAll => prevLoadingAll + 1);
        }
      };

      async function fetchTicketsStubHub() {
        try {
          const body=  {
            url:`https://www.stubhub.com${dataStubhub[0]?.url}`,
            CurrentPage:1,
            PageSize: 50
        }

          // Make your API call using Axios
          const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/stubhubSearchTickets`,body);
          const data = response.data;
          console.log(data);
          setTicketsStubhub(data.Items);
          
          fetchData(data.NumPages)

          // Update data state with the fetched events
        //  setDataVividseats(data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          // Set loading to false after the API call is complete
          setLoadingVividseats(false);
          console.log('eeeeeeeennnnnnnnnddd');
        }
      }
      fetchTicketsStubHub();
      console.log(dataStubhub);

    }, [dataStubhub]);


    useEffect(() => {
      if (dataVividseats[0]?.id !== undefined) {
        console.log(dataVividseats);
      
        const fetchDataTicketsVivid = async (id) => {
          try {
            // Make your API call using Axios
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/vividseatsSearchTickets/${id}`);
            const data = response.data;
            const lp=data.global[0].lp;
            const hp=data.global[0].hp;
            setMapUrl(data.global[0].staticMapUrl)
            setLowPrice(Math.floor(parseInt(lp) * 0.8));
            setHighPrice(Math.floor(parseInt(hp) * 1.2));
            setTicketsVividseats(data.tickets);

            

            console.log(data);

            function filterVividseats(data) {
              const filteredArray = data.filter(obj => obj.m.includes(quantity));
              setDataFiltredVividseats(filteredArray);
            }

            filterVividseats(data.tickets);

            // Update data state with the fetched events
          } catch (error) {
            console.error('Error fetching search results:', error);
          } finally {
            // Set loading to false after the API call is complete
            setLoadingVividseats(false);
            setLoadingAll(prevLoadingAll => prevLoadingAll + 1);

          }
        }
      
        fetchDataTicketsVivid(dataVividseats[0]?.id);
      }
    }, [dataVividseats]);
    
    useEffect(() => {
      console.log(loadingAll);
      if(loadingAll==3){

        console.log(loadingAll);
        const array1 = dataFiltredGameTimes;
        const array2 = dataFiltredStubhub;
        const array3 = dataFiltredVividseats;
        
      /*  const result = Array.from({ length: array1.length * 3 }, (_, index) => {
          const repeatIndex = Math.floor(index / 3);
          if (index % 3 === 0) {
            return array1[repeatIndex];
          } else if (index % 3 === 1) {
            return array2[repeatIndex];
          } else {
            return array3[repeatIndex];
          }
        });*/
        const mergedArray = [];
  
        const maxLength = Math.max(array1.length, array2.length,array3.length);
        for (let i = 0; i < maxLength; i++) {
          if (i < array1.length) {
            mergedArray.push(array1[i]);
          }
          if (i < array2.length) {
            mergedArray.push(array2[i]);
          }
          if (i < array3.length) {
            mergedArray.push(array3[i]);
          }
        }

        setMergedData(mergedArray)
        setLoadingSpin(false);
      }
    }, [loadingAll]);

 

    useEffect(() => {
      if(dataVividseats.length>0 && dataStubhub.length>0){
        console.log('2222222222 okkkkkkkkkkkk');
      }
    }, [,dataStubhub]);

    useEffect(() => {
      console.log(TicketsStubhub);
      let counter=0
      function filterVividseats(data) {
        const filteredArray = data.filter(obj => {
          // Parse the "p" value to a float
          const price = parseFloat(obj.p);
          // Check if the price falls within the range defined by low and high
          return price >= lowPrice && price <= highPrice && obj.m.includes(quantity);
      });
        setDataFiltredVividseats(filteredArray);
        counter+=1;
        return filteredArray;
      }

      function filterStubhub(allTickets){

        const filteredArray = allTickets.filter(obj => {
          const price = obj.RawPrice;

          return price >= lowPrice && price <= highPrice && obj.AvailableQuantities.includes(parseInt(quantity))
        });

          setDataFiltreStubhub(filteredArray);
          counter+=1;
          return filteredArray;

      }
      function filterGametime(data) {
        if(data.sortOrder){

          console.log('okiii');
          const filteredData = [];

          data?.displayGroupList[quantity].forEach(item => {
           // setTicketsStubhub(prevTickets => [...prevTickets, ...allTickets]);
           const listingData = data.allListings[item];
           const price = listingData.price.prefee/100;
           if(price >= lowPrice && price <= highPrice){
            filteredData.push(listingData);
           }
           
        });
        console.log(filteredData);
        setDataFiltredGameTimes(filteredData);
        counter+=1;
  
      return filteredData;
        }else return [];
      }      

      if(TicketsStubhub.length>0 && TicketsVividseats.length>0){
        console.log(TicketsGameTimes);
        const dataFiltredGame = filterGametime(TicketsGameTimes);
        const dataFiltredStub = filterStubhub(TicketsStubhub)
        const dataFiltredVivid =  filterVividseats(TicketsVividseats);
       
        if(counter==3){
          console.log(loadingAll);
          const array1 = dataFiltredGame;
          const array2 = dataFiltredStub;
          const array3 = dataFiltredVivid;
          

          const mergedArray = [];
    
          const maxLength = Math.max(array1.length, array2.length,array3.length);
          for (let i = 0; i < maxLength; i++) {
            if (i < array1.length) {
              mergedArray.push(array1[i]);
            }
            if (i < array2.length) {
              mergedArray.push(array2[i]);
            }
            if (i < array3.length) {
              mergedArray.push(array3[i]);
            }
          }
  
          setMergedData(mergedArray)
          console.log(mergedArray);
  
        }
      }
      

    }, [quantity,lowPrice,highPrice]);

    const handleQuantity = (value) => {
      setQuantity(value)
    };

    const handlePrice = (min,max) =>{
      console.log(min + '/' + max);
      setLowPrice(min);
      setHighPrice(max);
    }

    const sortPrice = () =>{
     
      const array1 = dataFiltredGameTimes;
      const array2 = dataFiltredStubhub;
      const array3 = dataFiltredVividseats;
          

          const mergedArray = [];
    
         
    array3.sort((a, b) => {
        // Parse the "p" values to floats

        const priceA = parseFloat(a.p);
        const priceB = parseFloat(b.p);
        
        if(sortQ=='asc'){
          // Compare the prices
          if (priceA < priceB) {
            return -1;
          }
          if (priceA > priceB) {
            return 1;
          }
        } else {
           // Compare the prices
        if (priceA > priceB) {
          return -1;
      }
      if (priceA < priceB) {
          return 1;
      }
        }       
        return 0;
  });

  array1.sort((a, b) => {
    // Parse the "p" values to floats

    const priceA = a.price.prefee/100;
    const priceB = b.price.prefee/100;
    
    if(sortQ=='asc'){
      // Compare the prices
      if (priceA < priceB) {
        return -1;
      }
      if (priceA > priceB) {
        return 1;
      }
    } else {
       // Compare the prices
    if (priceA > priceB) {
      return -1;
  }
  if (priceA < priceB) {
      return 1;
  }
    }       
    return 0;
});

array2.sort((a, b) => {
  // Parse the "p" values to floats

  const priceA = a.RawPrice;
  const priceB = b.RawPrice;
  
  if(sortQ=='asc'){
    // Compare the prices
    if (priceA < priceB) {
      return -1;
    }
    if (priceA > priceB) {
      return 1;
    }
  } else {
     // Compare the prices
  if (priceA > priceB) {
    return -1;
}
if (priceA < priceB) {
    return 1;
}
  }       
  return 0;
});

  const maxLength = Math.max(array1.length, array2.length,array3.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      mergedArray.push(array1[i]);
    }
    if (i < array2.length) {
      mergedArray.push(array2[i]);
    }
    if (i < array3.length) {
      mergedArray.push(array3[i]);
    }
  }

  setMergedData(mergedArray)
  setSortQ(sortQ === 'asc' ? 'desc' : 'asc');

    }
    return (
        <>
          <Seo pageTitle="Hotel List v3" />
          {/* End Page Title */}
    
          <div className="header-margin"></div>
          {/* header top margin */}
    
          <Header11 />
          {/* End Header 1 */}
    
          <section className="halfMap">
            <div className="halfMap__content">
              <h1>{dataStubhub[0]?.name}</h1>
            {dataStubhub.length>0 && (
              <h2><i className="icon-calendar-2 text-20 text-dark-1 mt-5"></i>  {new Date(dataGameTimes[0]?.event.datetime_local).toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}</h2>
            )}
            
           
          
              <div className="row x-gap-10 y-gap-10 pt-20">
                <DropdownSelelctBar handleQuantity={handleQuantity} quantity={quantity} lowPrice={lowPrice} highPrice={highPrice} handlePrice={handlePrice}/>
              </div>
              {/* End .row */}
    
              <div className="row y-gap-10 justify-between items-center pt-20">
                <TopHeaderFilter numberoftk={mergedData.length} sortPrice={sortPrice} page={"ticketsPage"}/>
              </div>
              {/* End .row */}
    
              <div className="row y-gap-20 pt-20">
                {loadingSpin ? (
                  <ColorRing
                  visible={true}
                  height="200"
                  width="200"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                  />
                ):(
                  <HotelProperties data={mergedData} urlGameTimes={urlGameTimes} urlVividseats={urlVividseats} urlStubhub={urlStubhub} quantity={quantity}/>
                )}
                
              </div>
              {/* End .row */}
                
              {/* End Pagination */}
            </div>
            {/* End .halfMap__content */}
    
            <div className="halfMap__map">
              {
                mapUrl!='' && (
                  <div className="map">
                  <MapPropertyFinder url={mapUrl} />
                </div>
                )
              }
             
            </div>
            {/* End halfMap__map */}
          </section>
          {/* End halfMap content */}
        </>
      );
};

export default Index;
