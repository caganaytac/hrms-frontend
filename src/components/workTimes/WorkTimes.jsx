import React, { useEffect, useState } from "react";
import WorkTimeService from "../../services/workTypeService";
import FormSelect from "../FormSelect/FormSelect";

export default function WorkTimes({ ...props }) {
  const [workTimes, setworkTimes] = useState([]);
  useEffect(() => {
    let workTimeService = new WorkTimeService();
    workTimeService.getAll().then((result) => setworkTimes(result.data.data));
  }, []);

  return (
    <FormSelect
      {...props}
      name={props.name ? props.name : "workTime"}
      placeholder={props.placeholder ? props.placeholder : "Work Time"}
      options={workTimes.map((w) => ({
        label: w.name,
        value: w,
      }))}
    />
  );
}
