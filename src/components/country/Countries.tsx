import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import Navigation from "../nav/Navigation";

const Countires = () => {
  // state
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(30);
  const radios: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedValue] = useState("");

  //Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(async (response) => setData(await response.json()))
      .catch((error) =>
        console.log("l'API n'est pas disponible pour le moment :", error)
      );
  }, []);

  // comportements
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.id);
  };

  const handleDeleleSearch = () => {
    setSelectedValue("");
  };

  // render
  return (
    <>
      <Navigation />
      <div className={classNames("container mx-auto px-4")}>
        <div className="my-8 p-4 lg:h-12 bg-green-200 lg:flex lg:justify-between lg:items-center lg:rounded-full">
          <input
            type="range"
            min={1}
            max={250}
            value={rangeValue}
            onChange={handleChange}
            className="cursor-pointer lg:mb-0 mb-4"
          />
          <div className="flex">
            {radios.map((continent) => (
              <div className="flex flex-wrap mr-2">
                <input
                  type="radio"
                  id={continent}
                  className="mr-2 cursor-pointer"
                  name="continentRadio"
                  checked={continent === selectedRadio}
                  onChange={handleSelectedValue}
                />
                <label
                  htmlFor={continent}
                  className="font-bold text-sm md:text-lg lg:text-lg"
                >
                  {continent.slice(0, 4)}
                </label>
              </div>
            ))}
          </div>
        </div>

        {selectedRadio && (
          <Button
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={false}
            className="mb-8"
            onClick={handleDeleleSearch}
          >
            Annuler la recherche
          </Button>
        )}

        <div className="flex flex-wrap justify-center p-4 items-center bg-green-100">
          {data
            .filter((country) => country.continents[0].includes(selectedRadio))
            .sort((a, b) => b.population - a.population) // range du plus petit au plus grand
            .slice(0, rangeValue)
            .map((country, index) => (
              <Card key={`country-${index}`} country={country} index={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Countires;
