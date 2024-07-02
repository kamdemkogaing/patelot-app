import { useState } from "react";

const InputField = ({
  id,
  label = " ",
  type = "text",
  className,
  title,
  ...props
}: any) => {
  // state
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(" ");

  // comportement
  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    setIsFocused(e.target.value !== "");
  };

  // Render
  return (
    <div className="relative py-8 border-b-4">
      <div className="mb-4">{title}</div>
      <input
        type={type}
        className={`${className} block rounded-lg p-4 tw-w-full text-base text-[#1D2D42] bg-gray-50 appearance-none focus:outline-none focus:ring-0 `}
        placeholder="patelot.de ..."
        name={id}
        value={inputValue}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleChange}
        {...props}
      />
      <label
        onClick={handleOnFocus}
        htmlFor={id}
        className={`absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform top-14 ${
          isFocused ? "scale-75 -translate-y-14 " : "scale-100 translate-y-0"
        }  z-10 origin-[0] left-14`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
