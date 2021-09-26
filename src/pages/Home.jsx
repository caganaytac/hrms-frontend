import React, { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import JobAdvertFilter from "../components/jobAdvert/JobAdvertFilter";
import JobAdvertList from "../components/jobAdvert/JobAdvertList";
import Footer from "../layouts/footer/Footer";
import Navbar from "../layouts/navbar/Navbar";

export default function Home() {
  useEffect(() => {
    document.title = "HRMS • Your dream job"
  }, [])
  return (
    <div>
      <Navbar />
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column style={{zndex : 900}} width={6}>
              <JobAdvertFilter />
            </Grid.Column>
            <Grid.Column width={10}>
              <JobAdvertList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
