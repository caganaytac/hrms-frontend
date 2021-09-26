import React from "react";
import FormSelect from "../FormSelect/FormSelect";

export default function Visibility({ ...props }) {
  const options = [
    { label: "Public", value: true },
    { label: "Private", value: false },
  ];

  return (
    <FormSelect
      {...props}
      name={props.name ? props.name : "status"}
      placeholder={props.placeholder ? props.placeholder : "Visibilty"}
      options={options}
    />
  );
}
