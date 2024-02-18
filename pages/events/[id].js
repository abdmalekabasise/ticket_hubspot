// pages/nba/[id].js
import { useRouter } from 'next/router';
import DefaultFooter from "../../components/footer/default";

import Sidebar from '../dashboard/common/Sidebar';
import Footer from 'react-multi-date-picker/plugins/range_picker_footer';
import WishlistTable from '../dashboard/db-wishlist/components/WishlistTable';
import Seo from '../../components/common/Seo';
import Header11 from "../../components/header/header-11";
import CallToActions from '../../components/common/CallToActions';


const NBAPlayerPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Seo pageTitle="Hotel List v5" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header11 />
            {/* End dashboard__sidebar */}
            <div className="" style={{ marginTop: "6%" }}>
                <div className="dashboard__content bg-light-2" style={{ paddingBottom: '60px' }}>
                    <div className="row ">
                        <div className="col-12">
                            <h1 className="text-30 lh-14 fw-600">{id} </h1>
                            <div className="text-15 text-light-1">
                                Tickets
                            </div>
                        </div>
                        {/* End .col-12 */}
                    </div>
                    {/* End .row */}

                    <div className="py-30 px-30 rounded-4 bg-white shadow-3" >
                        <WishlistTable equipe={id} />
                        {/* End tabs */}
                    </div>


                </div>
                {/* End .dashboard__content */}
            </div>
            {/* End dashbaord content */}
            <CallToActions />
            <DefaultFooter />
        </>
    );
};

export default NBAPlayerPage;
