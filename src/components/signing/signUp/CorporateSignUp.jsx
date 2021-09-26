import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "../../../utilities/MyInput";
import { Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/authService";

export default function CorporateSignUp() {
  useEffect(() => {
    document.title = "Register as Company • HRMS";
  }, []);
  const history = useHistory(),
    initialValues = {
      email: undefined,
      password: undefined,
      companyName: undefined,
      website: undefined,
      phoneNumber: undefined,
      photo: undefined,
    },
    schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#@&()–_[{}\]:;',?/*~$^+=<>]).+$/
        )
        .required(),
      companyName: Yup.string().required(),
      website: Yup.string()
        .lowercase()
        .matches(
          /^(http:\/\/|https:\/\/)?(www.)?([a-z0-9]{1,256})(\.com|\.co|\.net|\.tk|\.org|\.gov|\.uk|\.us|\.tv||\.istanbul||\.com.tr)(\.uk|\.us|\.ru)?\/?$/
        )
        .required(),
      phoneNumber: Yup.string()
        .matches(
          /^(\+90[ -]?|0[ -]?)?(5[0-9]{2}|\(5[0-9]{2}\))[ -]?(\d{3})[ -]?(\d{4})$/
        )
        .required(),
      photo: Yup.mixed().required("Photo cannot be empty"),
    }),
    register = async (values) => {
      var result = await new AuthService().registerForCorporate(values);
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
            <h2 style={{ color: "black", marginBottom: 28 }}>HRMS</h2>
          </Link>
        </Grid>
        <MyInput name="email" placeholder="Email" style={{ width: 400 }} />
        <MyInput
          name="password"
          placeholder="Password"
          type="password"
          style={{ width: 400 }}
        />
        <MyInput
          name="companyName"
          placeholder="Company Name"
          style={{ width: 400 }}
        />
        <MyInput name="website" placeholder="Website" style={{ width: 400 }} />
        <MyInput
          name="phoneNumber"
          placeholder="Phone Number"
          style={{ width: 400 }}
        />
        <MyInput name="photo" style={{ width: 400 }} type="file" />
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
          <Link to="/register" style={{ color: "black" }}>
            Register as individual
          </Link>
        </Grid.Column>
      </Form>
    </Formik>
  );
}
