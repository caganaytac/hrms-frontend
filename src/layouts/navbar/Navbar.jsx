import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";
import SignedIn from "../signing/SignedIn";
import SignedOut from "../signing/SignedOut";
import "./Navbar.css"

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push('/')
  }

  function handleSignIn() {
    history.push('/login/')
  }
  
  return (
    <div className="main">
        <Segment inverted>
        <Menu inverted pointing secondary>
          <Container>
          <Menu.Item name="HRMS" as={NavLink} to="/" />
          <Menu.Item name="About" as={NavLink} to="/about/" />
          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} /> //props
            ) : (
              <SignedOut signIn={handleSignIn}/>
            )}
          </Menu.Menu>
          </Container>
        </Menu>
        </Segment>
    </div>
  );
}