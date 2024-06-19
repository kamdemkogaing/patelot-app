import React from "react";
import Navigation from "../components/nav/Navigation";
import classNames from "classnames";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className={classNames("container mx-auto px-4")}>
        <div className={classNames("text-xl my-8")}>
          patrick-kamdem@patelot.de
        </div>
      </div>
    </>
  );
};

export default Contact;
