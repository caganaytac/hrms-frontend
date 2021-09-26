import React, { useState } from "react";
import { useField } from "formik";
import { Dropdown, DropdownItem, DropdownMenu } from "semantic-ui-react";

export default function FormSelect({
  name,
  options,
  placeholder = `Select ${name}`,
  style,
}) {
  const [fieldLabel, setFieldLabel] = useState("");

  const [, , helper] = useField(name);

  const setField = (value, label) => {
    helper.setValue(value);
    setFieldLabel(label);
  };

  return (
    <Dropdown
      name={`${name}Dropdown`}
      selection
      placeholder={fieldLabel || placeholder}
      style={style ? style : { width: 200, marginRight: 10 }}
    >
      <DropdownMenu>
        {options.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={() => setField(option.value, option.label)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
