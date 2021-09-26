import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
export default function Footer() {
  return (
    <Segment
      className="bg-teal"
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em", color: "black" }}
    >
      <Container textAlign="center">
        <Grid divided stackable>
          <Grid.Column width={3}>
            <Header as="h4" content="Group 1" />
            <List link>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="Group 2" />
            <List link>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="Group 3" />
            <List link>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">{process.env.REACT_APP_API_URL}</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column as={NavLink} to="/" width={7}>
            <Header as="h2" content="HRMS" />
            <p style={{color:"black"}}>HRMS 2021 © All Right Reserved.</p>
          </Grid.Column>
        </Grid>

        <Divider section />

        <List horizontal divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as={NavLink} to="/about">
            About
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}
