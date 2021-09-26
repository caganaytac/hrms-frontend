import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "../../../utilities/MyInput";
import { Button, GridColumn } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignIn() {
  useEffect(() => {
    document.title = "Login • HRMS"
  }, [])

  const initialValues = { email: undefined, password: undefined };
  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
         console.log(values);
      }}
    >
      <Form className="ui form" style={{ padding: 150 }}>
        <Link to="/">
          <h2 style={{ color: "black", marginBottom: 18 }}>HRMS</h2>
        </Link>
        <MyInput name="email" placeholder="Email" style={{ width: 400 }} />
        <MyInput
          name="password"
          type="password"
          placeholder="Password"
          style={{ width: 400 }}
        />
        <GridColumn>
          <Link to="/register/" style={{ color: "black" }}>
            Don't have an account?
          </Link>
        </GridColumn>

        <Button
          circular
          color="yellow"
          type="submit"
          style={{ color: "black", marginTop: 10, width: 100 }}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
}
