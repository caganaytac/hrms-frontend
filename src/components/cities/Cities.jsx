import React, { useEffect, useState } from "react";
import CityService from "../../services/cityService";
import FormSelect from "../FormSelect/FormSelect";

export default function Cities({ ...props }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  return (
    <FormSelect
      {...props}
      name={props.name ? props.name : "city"}
      placeholder={props.placeholder ? props.placeholder : "City"}
      options={cities.map((w) => ({
        label: w.name,
        value: w,
      }))}
    />
  );
}
