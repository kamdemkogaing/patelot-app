import { useState } from "react";

const FruitForm = ({ fruits, setFruits }) => {
  // state
  const [nouveauFruit, setNouveauFruit] = useState("");

  // comportement
  const handleSubmit = (e) => {
    e.preventDefault();

    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler sur la copie du state
    fruitsCopy.push({ id: new Date().getTime(), nom: nouveauFruit });

    //3. modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit(" ");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // Render
  return (
    <>
      <form action="submit" className="mt-4" onSubmit={handleSubmit}>
        <input
          className="border-4"
          type="text"
          placeholder="Ajouter un fruit..."
          value={nouveauFruit}
          onChange={handleChange}
        />
        <button className="border-2 px-6 rounded-r-[12px] bg-sky-500 hover:bg-sky-700">
          Ajouter +
        </button>
      </form>
    </>
  );
};

export default FruitForm;

// Gestion du formulaire
//1. création du formulaire
//2. soumission du formulaire
//3. collecte des données du formulaire
