import classNames from "classnames";
import {
  forwardRef,
  HtmlHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
import Navigation from "../components/nav/Navigation";

type IImage = {
  id?: string;
  src: string;
  alt?: string;
  className?: string;
  extension?: string;
  width?: number | null;
  height?: number | null;
  fetchpriority?: string;
  placeholder?: "empty" | "blur";
  loading?: "lazy" | "eager";
};

type IImageProps = HtmlHTMLAttributes<IImage>;

type CounterProps = {
  start: number;
  title?: ReactNode;
};

type Props = PropsWithChildren<CounterProps>;

export const Counter = forwardRef<HTMLButtonElement, Props>(
  ({ start, children, title }, ref) => {
    //state
    const [startCounter, setStartCounter] = useState<number>(start);
    //comportement
    const handleIncrement = () => {
      setStartCounter(startCounter + 1);
    };

    return (
      <div className={classNames("mt-4")}>
        <h2>{title}</h2>
        <p>Numéro: {startCounter}</p>
        <button
          className={classNames(
            "p-4 w-48 mt-4 bg-stone-500 border-zinc-500 border-4"
          )}
          onClick={handleIncrement}
          ref={ref}
        >
          Incrementer
        </button>
        {children}
      </div>
    );
  }
);

export const Contact = () => {
  return (
    <>
      <Navigation />
      <div className={classNames("container mx-auto px-4")}>
        <div className={classNames("text-xl my-8")}>
          <span>patrick-kamdem@patelot.de</span>
          <Counter start={0} title={<em>Le Compteur de Patrick KAMDEM :</em>}>
            <div className={classNames("")}>JE SUIS UN ENFANT DE COUNTER</div>
          </Counter>
        </div>
      </div>
    </>
  );
};

const MousEvent = (e: MouseEvent) => {
  e.preventDefault();
  console.log(e);
};
