import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Navbar from "../../layouts/navbar/Navbar";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertItem() {
  let { id } = useParams();

  const [jobAdvert, setJobAdvert] = useState({});
  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getById(id)
      .then((result) => setJobAdvert(result.data.data));
  }, []);

  return (
    <div>
      <Navbar />
      <Grid>{jobAdvert?.jobAdvert?.corporate?.companyName}</Grid>
    </div>
  );
}
