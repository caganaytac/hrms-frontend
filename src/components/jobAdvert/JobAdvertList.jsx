import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setjobAdverts] = useState([]);
  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAll()
      .then((result) =>
        setjobAdverts(result.data.data.content.filter((j) => j.jobAdvert?.status))
      );
  }, []);

  const [isMarked, setIsMarked] = useState(false);

  function addMark() {
    setIsMarked(true);
  }

  function removeMark() {
    setIsMarked(false);
  }

  return (
    <div>
      {jobAdverts.map((jobAdvert) => (
        <Card
          key={jobAdvert.jobAdvert?.id}
          centered
          style={{ width: 700, height: 320 }}
        >
          <Card.Content
            extra
            as={NavLink}
            to={`/job/${jobAdvert.jobAdvert?.id}`}
          >
            <Grid.Row>
              <Image
                floated="left"
                circular
                bordered
                style={{ width: 55, height: 55 }}
                src={jobAdvert.userPhoto?.url}
              />
            </Grid.Row>
          </Card.Content>

          <Card.Content
            as={NavLink}
            to={`job/${jobAdvert.jobAdvert?.id}`}
            style={{ height: 200 }}
          >
            <Card.Header as="h2">
              {jobAdvert.jobAdvert?.jobPosition?.name}
            </Card.Header>
            <Card.Description>
              <Grid.Row>
                <b>Work Area : </b>
                {jobAdvert.jobAdvert?.workArea?.name}
              </Grid.Row>
              <Grid.Row>
                <b>Work Time : </b>
                {jobAdvert.jobAdvert?.workTime?.name}
              </Grid.Row>
              <Grid.Row>
                <b>Open Position : </b>
                {jobAdvert.jobAdvert?.openPosition}
              </Grid.Row>
              <Grid.Row>
                <b>Deadline : </b>
                {jobAdvert.jobAdvert?.deadline}
              </Grid.Row>
              <Grid.Row>
                <b>Description : </b>
                {jobAdvert.jobAdvert?.description}
              </Grid.Row>
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <Grid.Row>
              <Button style={{ width: 120 }} floated="left" basic color="black">
                <Grid.Row>
                  <Icon className="location arrow" size="large" />
                  {jobAdvert.jobAdvert?.city?.name}
                </Grid.Row>
              </Button>
              {jobAdvert.jobAdvert?.minSalary !== null ? (
                jobAdvert.jobAdvert?.maxSalary !== null ? (
                  <Button
                    style={{ width: 156 }}
                    floated="left"
                    basic
                    color="green"
                  >
                    <Grid.Row>
                      <Icon className="dollar" size="large" />
                      {jobAdvert.jobAdvert?.minSalary} -
                      {jobAdvert.jobAdvert?.maxSalary}
                    </Grid.Row>
                  </Button>
                ) : (
                  <Button
                    style={{ width: 156 }}
                    floated="left"
                    basic
                    color="green"
                  >
                    <Grid.Row>
                      <Icon className="dollar" size="large" />
                      {jobAdvert.jobAdvert?.minSalary}
                    </Grid.Row>
                  </Button>
                )
              ) : null}

              {isMarked ? (
                <Button
                  onClick={removeMark}
                  style={{ width: 120 }}
                  floated="right"
                  basic
                  color="black"
                >
                  <Icon className="remove bookmark" fitted size="large" />
                </Button>
              ) : (
                <Button
                  onClick={addMark}
                  style={{ width: 120 }}
                  floated="right"
                  basic
                  color="black"
                >
                  <Icon className="bookmark outline" fitted size="large" />
                </Button>
              )}
            </Grid.Row>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
