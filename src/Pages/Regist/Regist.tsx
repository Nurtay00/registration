import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { regist } from "../../Service/Service";
import * as Yup from "yup";
import "./Regist.css";

interface MyFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Regist() {
  const initialValues: MyFormValues = {
    email: "",
    lastName: "",
    firstName: "",
    password: "",
  };
  return (
    <div className="auth__wrapper">
      <h1 className="header">Registration</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          regist({ email: values.email, password: values.password });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div style={{ margin: "0 auto" }}>
              <div className="title">Username</div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="inputfield"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div style={{ margin: "0 auto" }}>
              <div className="title">First Name</div>
              <Field
                type="text"
                name="firstName"
                placeholder="Ivan"
                className="inputfield"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>
            <div style={{ margin: "0 auto" }}>
              <div className="title">Last Name</div>
              <Field
                type="text"
                name="lastName"
                placeholder="Ivanov"
                className="inputfield"
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div style={{ margin: "0 auto" }}>
              <div className="title">Password</div>
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
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <button className="btn" type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <Link to="/login" className="regist__btn">
                login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
