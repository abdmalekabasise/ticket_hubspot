const TopHeaderFilter = ({numberoftk , sortPrice}) => {
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="text-18">
            <span className="fw-500">{numberoftk} tickets</span> on all sites
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-auto">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1" 
              onClick={() => sortPrice()}

              >
                <i className="icon-up-down text-14 mr-10" />
                Sort by price
              </button>
              
            </div>
           
            {/* End .col */}

       
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
