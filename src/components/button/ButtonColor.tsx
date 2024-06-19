import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Modal } from "@mui/material";
import Box from "@material-ui/core/Box";

const ButtonColor = ({ couleur }: any) => {
  // state
  const [color, setColor] = useState(couleur);
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #000",
    boxShadow: "24",
    backgroundColor: "white",
    padding: 10,
  };

  // comportement
  const changeColor = () => {
    // on fait une copie de la variable couleur
    let newColor = color;

    // on manipule la copie de la variable
    if (newColor === "red") {
      newColor = "blue";
    } else {
      newColor = "red";
    }

    // modifier le state avec le setter
    setColor(newColor);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Render
  return (
    <div className="py-8 border-b-4 ">
      <div className="flex flex-col lg:w-1/5">
        <div className="my-6 text-2xl" style={{ color }}>
          Je suis un composant
        </div>
        <button
          onClick={changeColor}
          className="my-6 bg-sky-500 hover:bg-sky-700 border-2 px-6 rounded-full"
        >
          Changer la couleur
        </button>
        <Button
          variant="outlined"
          color="secondary"
          href="about"
          size="large"
          fullWidth={false}
        >
          Outlined
        </Button>

        <Button onClick={handleOpen} className="mt-4">
          Open Child Modal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box className="mt-8" style={style}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              sunt ipsum quis, sed doloremque accusantium expedita veniam qui
              odit similique totam et possimus error, nobis nihil rem provident
              illum! Ipsam delectus voluptatibus quo a iure quam non, ratione ab
              modi laboriosam minus deleniti blanditiis atque repellat, nemo
              saepe debitis odio.
            </p>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ButtonColor;
