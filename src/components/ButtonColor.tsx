import { useState } from "react";

function ButtonColor({ couleur }: any) {
  // state
  const [color, setColor] = useState(couleur);

  // comportement
  const changeColor = () => {

    // on fait une copie de la variable couleur
    let newColor = color;
 
    // on manipule la copie de la variable
    if (newColor === "red") {
      newColor = "blue";
    } else {
      newColor = "red"
    }

    // modifier le state avec le setter
    setColor(newColor);
  };

  // Render
  return (
    <div>
      <div className="mt-6 text-2xl" style={{ color }}>
        Je suis un composant
      </div>
      <button
        onClick={changeColor}
        className="bg-sky-500 hover:bg-sky-700 border-2 px-6 rounded-full"
      >
        Changer la couleur
      </button>
    </div>
  );
}

export default ButtonColor;
