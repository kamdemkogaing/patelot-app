const Fruit = ({ fruitInfo, onFruitDelete }) => {
  // state

  // comportements

  // render
  return (
    <div>
      <li>
        {fruitInfo.nom}
        <button
          onClick={() => onFruitDelete(fruitInfo.id)}
          className="ml-2 border-2 px-6 rounded-full bg-sky-500 hover:bg-sky-700"
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Fruit;
