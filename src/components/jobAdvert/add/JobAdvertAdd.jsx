import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "../../../utilities/MyInput";
import { Button, Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import Cities from "../../cities/Cities";
import JobPositions from "../../jobPositions/JobPositions";
import WorkAreas from "../../workAreas/WorkAreas";
import WorkTimes from "../../workTimes/WorkTimes";
import JobAdvertService from "../../../services/jobAdvertService";
import Visibility from "../../visibility/Visibility";
import { toast } from "react-toastify";

export default function JobAdvertAdd() {
  useEffect(() => {
    document.title = "Create Job Advert • HRMS";
  }, []);

  const { corporateId } = useParams(),
    initialValues = {
      corporate: { id: parseInt(corporateId) },
      jobPosition: undefined,
      city: undefined,
      workArea: undefined,
      workTime: undefined,
      minSalary: undefined,
      maxSalary: undefined,
      openPosition: undefined,
      deadline: undefined,
      description: undefined,
      status: undefined,
    },
    schema = Yup.object({
      city: Yup.object().required(),
      jobPosition: Yup.object().required(),
      workArea: Yup.object().required(),
      workTime: Yup.object().required(),
      minSalary: Yup.number().moreThan(0),
      maxSalary: Yup.number().moreThan(Yup.ref("minSalary")),
      openPosition: Yup.number().moreThan(0).required(),
      deadline: Yup.date().required(),
      status: Yup.boolean().required(),
      description: Yup.string().required(),
    }),
    addJobAdvert = async (values) => {
      console.log(values);
      const result = await new JobAdvertService().add(values);
      if (result.data.success) return toast.success(result.data.message);
    };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => addJobAdvert(values)}
    >
      <Form className="ui form" style={{ padding: 150 }}>
        <Grid centered>
          <h2 style={{ color: "black" }}>Create Job Advert</h2>
          <Grid.Row>
            <Cities />
            <JobPositions />
            <WorkAreas />
            <WorkTimes />
          </Grid.Row>
          <Grid.Row>
            <MyInput name="minSalary" type="number" placeholder="Min Salary" />
            <MyInput name="maxSalary" type="number" placeholder="Max Salary" />
            <MyInput
              name="openPosition"
              type="number"
              placeholder="Open Position"
            />
            <MyInput name="deadline" type="date" placeholder="Date of Birth" />
          </Grid.Row>
          <Grid.Row>
            <Visibility />
            <MyInput name="description" type="text" placeholder="Description" />
          </Grid.Row>
          <Button
            circular
            color="yellow"
            type="submit"
            style={{
              color: "black",
              marginTop: 40,
              width: 150,
              height: 40,
            }}
          >
            Create
          </Button>
        </Grid>
      </Form>
    </Formik>
  );
}