import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./layouts/footer/Footer";
import Home from "./pages/Home";
import JobAdvertItem from "./components/jobAdvert/JobAdvertItem";
import JobAdvertFilter from "./components/jobAdvert/JobAdvertFilter";
import ConfirmAccount from "./pages/account/confirmAccount/ConfirmAccount";
import SignIn from "./components/signing/signIn/SignIn";
import SignUp from "./components/signing/signUp/SignUp";
import CorporateSignUp from "./components/signing/signUp/CorporateSignUp";
import JobAdvertAdd from "./components/jobAdvert/add/JobAdvertAdd";
import About from "./pages/About";
import JobAdvertUpdate from "./components/jobAdvert/update/JobAdvertUpdate";
import ConfirmEmail from "./pages/account/confirmEmail/ConfirmEmail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect strict from="/jobs/" to="/" />
        <Redirect strict from="/jobs" to="/" />
        <Redirect from="/home" to="/" />
        <Redirect from="/home/" to="/" />
        <Route exact path="/" component={Home} />

        <Redirect strict from="/about/" to="/about" />
        <Route exact path="/about" component={About} />

        <Redirect strict from="/job/:id/" to="/job/:id" />
        <Route exact path="/job/:id" component={JobAdvertItem} />

        <Redirect
          strict
          from="/:corporateId/job/add/"
          to="/:corporateId/job/add"
        />
        <Route exact path="/:corporateId/job/add" component={JobAdvertAdd} />

        <Redirect
          strict
          from="/:corporateId/job/update/:jobAdvertId/"
          to="/:corporateId/job/update/:jobAdvertId"
        />
        <Route
          exact
          path="/:corporateId/job/update/:jobAdvertId"
          component={JobAdvertUpdate}
        />

        <Route exact path="/filter" component={JobAdvertFilter} />
        <Route exact path="/footer" component={Footer} />
         
        <Route
          exact
          path="/account/confirm-email/"
          component={ConfirmEmail}
        />

        <Route
          exact
          strict
          path="/account/confirm/id=:id/"
          component={ConfirmAccount}
        />

        <Redirect strict from="/login/" to="/login" />
        <Route exact path="/login" component={SignIn} />

        <Redirect strict from="/register/t=company/" to="/register/t=company" />
        <Route exact path="/register/t=company" component={CorporateSignUp} />

        <Redirect strict from="/register/" to="/register" />
        <Route exact strict path="/register" component={SignUp} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
