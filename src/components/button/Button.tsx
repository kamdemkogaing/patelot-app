import classNames from "classnames";
import { PropsWithChildren } from "react";

export type ButtonProps = {
  color: string;
  onClick?: () => void;
};

export type ButtonProperties = PropsWithChildren<ButtonProps>;

export const Button = (props: ButtonProperties) => {
  return (
    <button style={{ color: props.color }} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const ButtonView = () => {
  return (
    <div
      className={classNames(
        "container mx-auto px-4 m-auto max-w-sm my-4 sm:hidden"
      )}
    >
      <Button color="#ae898d" onClick={() => console.log("KAMDEM - PATRICK")}>
        Click Me!
      </Button>
    </div>
  );
};

export default Button;
