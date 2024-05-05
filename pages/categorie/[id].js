import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import Header11 from "../../components/header/header-11";
import DefaultFooter from "../../components/footer/default";
import Pagination from "../../components/hotel-list/common/Pagination";
import HotelProperties from "../../components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "../../components/hotel-list/common/DropdownSelelctBar";
import Locations from "../../components/home/home-5/Locations";
import Index from "../../components/equipes/index"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategorieId = () => {
    const router = useRouter();
    const { id } = router.query;
    const [image, setImage] = useState(null);
    useEffect(() => {
        switch (id) {
            case 'NFL':
                setImage('/img/misc/nfl1.jpeg')
                break;
            case 'MLB':
                setImage('/img/misc/baseball1.jpeg')
                break;
            case 'NHL':
                setImage('/img/misc/hockey1.jpeg')
                break;
            case 'MLS':
                setImage('/img/misc/mls1.jpeg')
                break;

            default:
                setImage('/img/misc/nfl1.jpeg')
        }

    }, [])
    return (
        <>
            <Seo pageTitle="Hotel List v5" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header11 />
            {/* End Header 1 */}

            <section className="section-bg pt-40 pb-40 relative z-5">
                <div className="section-bg__item col-12">
                    <img
                        src={image}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* End .section-bg__item */}

                <div className="container" style={{ height: '400px' }}>
                    <div className="row">
                        <div className="col-5" style={{ marginTop: '25%' }}>
                            <div className="text-center" >
                                <h1 className="text-40 fw-600 text-white">
                                    {id} Tickets
                                </h1>
                            </div>
                            {/* End text-center */}

                        </div>
                        {/* End col-12 */}
                    </div>
                </div>
            </section>
            {/* Top SearchBanner */}
            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Teams list</h2>

                            </div>
                        </div>
                        {/* End .col */}


                        {/* End .col */}
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20">
                        <Index id={id} />
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

export default CategorieId;
