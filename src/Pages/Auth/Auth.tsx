import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../Service/Service";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Auth.css";
interface MyFormValues {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Username is Required"),
  password: Yup.string().required("Password is Required"),
});

const Auth = () => {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  return (
    <div className="auth__wrapper">
      <h1 className="header">login</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          login({ values });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div style={{ margin: "0 auto" }}>
              <div>Username</div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="inputfield"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div style={{ margin: "0 auto" }}>
              <div>Password</div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="inputfield"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div
              style={{
                height: "40px",
                fontSize: "15px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <button type="submit" className="btn" disabled={isSubmitting}>
                Submit
              </button>
              <Link to="/registration" className="regist__btn">
                registration
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Auth;
