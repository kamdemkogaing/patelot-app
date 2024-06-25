import classNames from "classnames";
import { useState } from "react";
import Article from "../components/article/Article";
import { ButtonView } from "../components/button/Button";
import ButtonColor from "../components/button/ButtonColor";
import Fruit from "../components/form/Fruit";
import FruitForm from "../components/form/FruitForm";
import InputField from "../components/form/InputField";
import Navigation from "../components/nav/Navigation";

const Tutorial = () => {
  // state
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // comportements
  const handleDelete = (id: any) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier le state avec son setter
    setFruits(fruitsCopyUpdated);
  };

  return (
    <div>
      <Navigation />
      <div className={classNames("container mx-auto px-4")}>
        <div
          className={classNames(
            "flex flex-col justify-center items-center py-8 border-b-4"
          )}
        >
          <h1 className={classNames("mb-4 font-bold text-3xl")}>
            Liste des fruits
          </h1>
          <ul className={classNames("list-decimal")}>
            {fruits.map((fruit) => (
              <Fruit
                fruitInfo={fruit}
                onFruitDelete={handleDelete}
                key={fruit.id}
              />
            ))}
          </ul>
          <FruitForm fruits={fruits} setFruits={setFruits} />
        </div>
        <ButtonColor couleur />
        <Article id={1} title="Patrick Kamdem" />
        <Article id={2} title="Luca Kamdem" />
        <Article id={3} title="Elyas Kamdem" />
        <InputField title="AI Domain Suche" />
        <ButtonView />
      </div>
    </div>
  );
};

export default Tutorial;
