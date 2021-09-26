import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Grid } from "semantic-ui-react";
import Cities from "../cities/Cities";
import Corporates from "../corporates/Corporates";
import JobPositions from "../jobPositions/JobPositions";
import WorkAreas from "../workAreas/WorkAreas";
import WorkTimes from "../workTimes/WorkTimes";

export default function JobAdvertFilter() {
  let history = useHistory();

  const initialValues = {
    city: undefined,
    jobPosition: undefined,
    corporate: undefined,
    workArea: undefined,
    workTime: undefined,
  };
  return (
    <Card style={{ height: 500, width: 250 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) =>
          history.push(
            `/${
              values.city
                ? values.jobPosition
                ? values.corporate
                  ? values.workArea
                    ? values.workTime
                      ? `city=${values.city.name}&jobPosition=${values.jobPosition.name}&corporate=${values.corporate?.companyName}&workArea=${values.workArea.name}&workTime=${values.workTime.name}`
                      : `city=${values.city.name}&jobPosition=${values.jobPosition.name}&corporate=${values.corporate.companyName}&workArea=${values.workArea.name}`
                      : `city=${values.city.name}&jobPosition=${values.jobPosition.name}&corporate=${values.corporate.companyName}`
                    : `city=${values.city.name}&jobPosition=${values.jobPosition.name}`
                  : `city=${values.city.name}`
                : null
            }`
          )
        }
      >
        <Form>
          <Grid centered style={{ padding: 15 }}>
            <Grid.Row>
              <Cities name="city" />
            </Grid.Row>

            <Grid.Row>
              <JobPositions name="jobPosition" />
            </Grid.Row>

            <Grid.Row>
              <Corporates name="corporate" />
            </Grid.Row>

            <Grid.Row>
              <WorkAreas name="workArea" />
            </Grid.Row>

            <Grid.Row centered>
              <WorkTimes name="workTime" />
            </Grid.Row>

            <Grid.Row>
              <Button
                type="submit"
                circular
                color="yellow"
                style={{ width: 195, height: 40 }}
                icon="filter"
                content="Filter"
              />
            </Grid.Row>
          </Grid>
        </Form>
      </Formik>
    </Card>
  );
}
