import { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./PrallaxStyle";

const useStyles = makeStyles(styles);

const Prallax = ({ filter, className, children, image, small }) => {
  let windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = document.documentElement.scrollTop / 3;
  } else {
    windowScrollTop = 0;
  }

  const [transform, setTransform] = useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = document.documentElement.scrollTop / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const classes = useStyles();

  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });

  return (
    <div
      className={parallaxClasses}
      style={{
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      {children}
    </div>
  );
};

export default Prallax;