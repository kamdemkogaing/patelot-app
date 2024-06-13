import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ index, country, ...rest }) => {
    // state
    const [isFLiped, setIsFlipped] = useState(false);

    // comportement
    const handleClick = () => {
        setIsFlipped(!isFLiped);
    };


    //Render
    return (
        <div
            key={`country${index}`} {...rest}
            className="cursor-pointer flex-grow w-3/12 lg:w-2/12 relative text-left mr-4 lg:pt-12 md:pt-12 pt-4 mb-6"
        >
            <ReactCardFlip flipDirection="vertical" isFlipped={isFLiped}>
                <div
                    onClick={handleClick}
                >
                    <img
                        src={country.flags.svg}
                        alt={`country:${country.translations.fra.common}`}
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                </div>

                <div
                    className="p-5 border-4 flex flex-col md:w-full lg:w-full bg-white"
                    onClick={handleClick}
                >
                    <div>
                        <span className="font-bold">Non du pays:</span> {country.translations.fra.common}
                    </div>
                    <div>
                        <span className="font-bold">Capitale du pays:</span> {country.capital}
                    </div>
                    <div>
                        <span className="font-bold">Population :</span> {country.population.toLocaleString()}
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default Card;