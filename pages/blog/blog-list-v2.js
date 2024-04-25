import React from "react";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import LocationTopBar from "../../components/common/LocationTopBar";
import Blog2 from "../../components/blog/Blog2";
import BlogSidebar from "../../components/blog/blog-sidebar";
import BlogPagination from "../../components/blog/BlogPagination";

const BlogListV2 = () => {
  return (
    <>
      <Seo pageTitle="Blog List V2" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

    
      {/* End location top bar section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Blog articles</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover insightful articles covering a variety of topics. From practical tips to thought-provoking analyses, our blog has something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End title */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-8">
              <div className="row y-gap-30">
                <Blog2 />
              </div>
              {/* End .row */}
     
            </div>
            {/* End .col */}

            <div className="col-xl-3">
             
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogListV2;
