import React, { useEffect, useState } from "react";
import JobPositionService from "../../services/jobPositionService";
import FormSelect from "../FormSelect/FormSelect";

export default function JobPositions({ ...props }) {
  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  return (
    <FormSelect
      {...props}
      name={props.name ? props.name : "jobPosition"}
      placeholder={props.placeholder ? props.placeholder : "Job Position"}
      options={jobPositions.map((w) => ({
        label: w.name,
        value: w,
      }))}
    />
  );
}
