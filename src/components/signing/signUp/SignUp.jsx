import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "../../../utilities/MyInput";
import { Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/authService";

export default function SignUp() {
  useEffect(() => {
    document.title = "Register • HRMS";
  }, []);
  const history = useHistory(),
    initialValues = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      nationalIdentity: undefined,
      dateOfBirth: undefined,
      photo: undefined,
    },
    schema = Yup.object({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#@&()–_[{}\]:;',?/*~$^+=<>]).+$/
        )
        .required(),
      nationalIdentity: Yup.string()
        .matches(/^[0-9]{11}$/)
        .required(),
      dateOfBirth: Yup.date().required(),
      photo: Yup.mixed().optional(),
    }),
    register = async (values) => {
      var result = await new AuthService().registerForIndividual(values);
      if (result.data.success) history.push("/account/confirm-email/");
      if (!result.data.success) console.log(result.data.message);
    };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => register(values)}
    >
      <Form className="ui form" style={{ padding: 150 }}>
        <Grid centered>
          <Link to="/">
            <h2 style={{ color: "black" }}>HRMS</h2>
          </Link>
          <Grid.Row>
            <MyInput
              name="firstName"
              placeholder="First Name"
              style={{ width: 195, marginRight: 10 }}
            />
            <MyInput
              name="lastName"
              placeholder="Last Name"
              style={{ width: 195, marginBottom: 15 }}
            />
          </Grid.Row>
        </Grid>

        <MyInput name="email" placeholder="Email" style={{ width: 400 }} />
        <MyInput
          name="password"
          placeholder="Password"
          type="password"
          style={{ width: 400 }}
        />
        <MyInput
          name="nationalIdentity"
          placeholder="National Identity"
          style={{ width: 400 }}
        />
        <MyInput
          name="dateOfBirth"
          placeholder="Date of Birth"
          style={{ width: 400 }}
          type="date"
        />
        <MyInput
          name="photo"
          style={{ width: 400 }}
          type="file"
        />
        <Grid.Column>
          <Link to="/login" style={{ color: "black" }}>
            Have an account?
          </Link>
        </Grid.Column>
        <Button
          circular
          color="yellow"
          type="submit"
          style={{
            color: "black",
            marginTop: 10,
            marginBottom: 10,
            width: 100,
          }}
        >
          Sign Up
        </Button>
        <Grid.Column>
          <Link to="/register/t=company" style={{ color: "black" }}>
            Register as company
          </Link>
        </Grid.Column>
      </Form>
    </Formik>
  );
}