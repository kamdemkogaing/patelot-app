import { useEffect, useState } from "react";
import axios from "axios"
import Navigation from "./Navigation";
import ImageLogo from "./ImageLogo";
import Card from "./Card";

const Countires = () => {
    // state
    const [data, setData] = useState([]);

    //Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => setData(response.data));
    }, [])

    // comportementich

    // render
    return (
        <div className="container mx-auto px-4">
            <div>
                <ImageLogo />
                <Navigation />
                <h1 className="my-8 text-center text-2xl text-ellipsis font-bold">
                    COUNTRIES
                </h1>
                <ul className="flex flex-wrap justify-center items-center">
                    {data.map((country, index) => <Card key={`country-${index}`} country={country} index={index} />)}
                </ul>
            </div>
        </div>
    );
}

export default Countires;