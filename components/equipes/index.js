import Link from "next/link";
import { useEffect, useState } from "react";
import { getEquipesApi } from "../../data/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas);



const Index = ({ id }) => {

    const name = id
    const [equipes, setEquipes] = useState(null);

    const getEquipes = async (name) => {
        try {
            const response = await getEquipesApi(name);
            setEquipes(response.data.performers);
            console.log(response.data.performers);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getEquipes(name);
    }, []);



    return (
        <>
            {equipes && equipes.map((item) => (
                <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    key={item.name}


                >
                    <Link href={`/events/${item.name}`} className="destCard -type-1 d-block">
                        <div className="row x-gap-20 y-gap-20 items-center">
                            <div className="col-auto">
                                <div className="destCard__image rounded-4">
                                    <FontAwesomeIcon icon={`fa-solid fa-${item.name.charAt(0).toLocaleLowerCase()}`} />
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="text-18 fw-500">{item.name}</div>
                                <div className="text-14 lh-14 text-light-1 mt-5"></div>
                            </div>
                        </div>
                    </Link>
                    {/* Note: You should avoid including the Font Awesome CSS link inside the loop */}
                </div>
            ))}
        </>
    );
};

export default Index;
