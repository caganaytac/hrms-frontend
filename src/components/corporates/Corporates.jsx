import React, { useEffect, useState } from "react";
import CorporateService from "../../services/corporateService";
import FormSelect from "../FormSelect/FormSelect";

export default function Corporates({ ...props }) {
  const [corporates, setCorporates] = useState([]);
  useEffect(() => {
    let corporateService = new CorporateService();
    corporateService.getAll().then((result) => setCorporates(result.data.data));
  }, []);

  return (
    <FormSelect
      {...props}
      placeholder={props.placeholder ? props.placeholder : "Company"}
      options={corporates.map((w) => ({
        label: w.companyName,
        value: w,
      }))}
    />
  );
}
