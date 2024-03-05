import React from "react";

const TextBox = ({ placeholder, value, onChange, dataTestId }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="flex rounded-xl h-10 w-2/12 placeholder:text-black text-center border-2 border-black hover:scale-110 duration-300 mt-5"
      data-testid={dataTestId}
    />
  );
};

export default TextBox;
