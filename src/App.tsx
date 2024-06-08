//https://www.youtube.com/watch?v=h2a0cSC1Vz8

import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
import ButtonColor from "./components/ButtonColor";
import Article from './components/Article';
import InputField from "./components/InputField";


function App() {
  // state
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
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

  // render
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="mb-4 font-bold text-3xl">Liste des fruits</h1>
        <ul className="list-decimal">
          {fruits.map((fruit) => (
            <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} key={fruit.id} />
          ))}
        </ul>
        <FruitForm fruits={fruits} setFruits={setFruits} />
      </div>

      <ButtonColor couleur />

      <Article id={1} title="Patrick Kamdem" />
      <Article id={2} title="Patrick Kogaing"/>
      <Article id={2} title="Elyas Joseph"/>

      <InputField title="AI Domain Suche" />
    </div>
  );
}

export default App;

// Gestion du formulaire
//1. création du formulaire
//2. soumission du formulaire
//3. collecte des données du formulaire
