import React from "react";

const TextareaContact = ({
  type = "text",
  rows = 5,
  value,
  onChange,
  placeholder = "",
  name,
  id,
  ...props
}) => {
  return (
    <textarea
      className="border border-white/30 rounded-md hover:border-white focus:border-primary focus:outline-none focus:ring-0 w-full transition-all duration-300 pt-2"
      style={{ textIndent: "10px" }}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      rows={rows}
      {...props}
    />
  );
};

export default TextareaContact;
