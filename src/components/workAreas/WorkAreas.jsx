import React, { useEffect, useState } from "react";
import WorkAreaService from "../../services/workAreaService";
import FormSelect from "../FormSelect/FormSelect";

export default function WorkAreas({ ...props }) {
  const [workAreas, setWorkAreas] = useState([]);
  useEffect(() => {
    let workAreaService = new WorkAreaService();
    workAreaService.getAll().then((result) => setWorkAreas(result.data.data));
  }, []);

  return (
    <FormSelect
      {...props}
      name={props.name ? props.name : "workArea"}
      placeholder={props.placeholder ? props.placeholder : "Work Area"}
      options={workAreas.map((w) => ({
        label: w.name,
        value: w,
      }))}
    />
  );
}
