import React from "react";

const InputContact = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
  id,
  ...props
}) => {
  return (
    <input
      className="border border-white/30 rounded-md hover:border-white focus:border-primary focus:outline-none focus:ring-0 w-full h-10 transition-all duration-300"
      style={{ textIndent: "10px" }}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      {...props}
    />
  );
};

export default InputContact;
