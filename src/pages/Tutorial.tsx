
import ButtonColor from '../components/ButtonColor';
import Article from '../components/Article';
import FruitForm from '../components/FruitForm';
import InputField from '../components/InputField';
import Countires from '../components/Countries';
import Fruit from '../components/Fruit';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import ImageLogo from '../components/ImageLogo';
;

const Tutorial = () => {
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

  return (
    <div>
      <div className='container mx-auto px-4'>
        <ImageLogo />
        <Navigation />
        <div className="flex flex-col justify-center items-center py-8 border-b-4">
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
        <InputField title="AI Domain Suche" />
        <Countires />
      </div>
    </div>
  );
};

export default Tutorial;