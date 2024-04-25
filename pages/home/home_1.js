import dynamic from "next/dynamic";
import AddBanner from "../../components/add-banner/AddBanner";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/hero/hero-1";
import BlockGuide from "../../components/block/BlockGuide";
import Blog from "../../components/blog/Blog3";
import CallToActions from "../../components/common/CallToActions";
import Destinations from "../../components/home/home-1/Destinations";
import Testimonial from "../../components/home/home-1/Testimonial";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
import Hotels from "../../components/hotels/Hotels";
import SelectFilter from "../../components/hotels/filter-tabs/SelectFilter";

const Home_1 = () => {
  return (
    <>
      <Seo pageTitle="Buy and Sell Tickets: Concerts, Sports & Theater" />
      {/* End Page Title */}

      <Header1 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Categories</h2>
               
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Categories
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">

             {/*  <AddBanner /> */}

          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End AddBanner */}


      {/* Recommended Properties */}


      {/* Block Guide Section */}


      {/* End testimonial Section */}


      {/* End blog Section */}


      {/* End Destination we love Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
