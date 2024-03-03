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
      className="flex rounded-xl h-10 w-2/12 placeholder:text-black text-center mt-5"
      data-testid={dataTestId}
    />
  );
};

export default TextBox;
