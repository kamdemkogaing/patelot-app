import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ index, country, ...rest }) => {
    // state
    const [isFLiped, setIsFlipped] = useState(false);

    // comportement
    const flipCardEnter = () => {
        setIsFlipped(true);
    };

    const flipCardFalse = () => {
        setIsFlipped(false);
    };

    //Render
    return (
        <li
            key={`country${index}`} {...rest}
            className="cursor-pointer"
        >
            <ReactCardFlip flipDirection="vertical" isFlipped={isFLiped}>
                <div
                    onMouseEnter={flipCardEnter}
                    onMouseLeave={flipCardFalse}
                >
                    <img
                        src={country.flags.svg}
                        alt={`country:${country.translations.fra.common}`}
                        width={200}
                        height={200}
                        className="rounded-lg mr-5"
                    />
                </div>

                <div
                    className="p-5 border-4 m-3 flex flex-col"
                    onMouseEnter={flipCardEnter}
                    onMouseLeave={flipCardFalse}
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
        </li>
    );
};

export default Card;