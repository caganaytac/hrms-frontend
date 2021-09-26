import { useField } from "formik";
import React from "react";
import { FormField } from "semantic-ui-react";

export default function MyInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <input
        {...field}
        {...props}
        style={props.style ? props.style : { width: 200, marginRight: 10 }}
      />
    </FormField>
  );
}
