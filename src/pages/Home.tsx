import classNames from "classnames";
import Navigation from "../components/nav/Navigation";

const Home = () => {
  return (
    <div className="">
      <Navigation />

      <div className={classNames("container mx-auto px-4")}>
        <h1 className="text-xl mt-10 font-bold">ACCUEIL</h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus inventore voluptate nobis quia laboriosam similique
          facilis, odit modi dolores maxime vero fugiat amet at totam
          consequatur animi non, soluta exercitationem doloribus? Possimus
          officia, dolorum, perferendis, mollitia at eveniet laboriosam cumque
          accusamus quos rem ut. Nostrum fugit atque eum sapiente ex magni
          repellat provident dolores maiores, harum rerum laboriosam hic vero
          consectetur, commodi enim eligendi, itaque perspiciatis. Architecto,
          blanditiis. Eius mollitia maxime dolorem repellat doloremque, sed
          quia? Laborum dolor velit harum dicta et! Dolor amet maxime architecto
          repellat animi cumque fugiat vero ex ratione ipsa, eligendi asperiores
          libero consequuntur, nam autem.
        </p>
        <p>HOME</p>
      </div>
    </div>
  );
};

export default Home;
