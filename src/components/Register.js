import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import "./Register.css";

const schema = yup.object().shape({
  companyName: yup.string().required(),
  description: yup.string().required(),
  number: yup.number().required(),
  email: yup.string().required(),
  logo: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

function Register() {
  const [state, setState] = useState("");

  return (
    <div className="register">
      <h2 className="register__heading">Registration Form</h2>
      <Formik
        className="register__form"
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          companyName: "",
          description: "",
          number: "",
          city: "",
          email: "",
          logo: "",
          state: "",
          terms: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
                isInvalid={!!errors.companyName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.companyName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationFormik0">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={values.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />

              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  placeholder="number"
                  aria-describedby="inputGroupPrepend"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  isInvalid={!!errors.number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="abc@gmail.com"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationFormik05">
              <Form.Label>Company Logo URL</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Company Logo"
                name="logo"
                value={values.logo}
                onChange={handleChange}
                isInvalid={!!errors.logo}
              />

              <Form.Control.Feedback type="invalid">
                {errors.logo}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="exampleForm.SelectCustom">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                custom
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              >
                {" "}
                <option>Maharashtra </option>
                <option>Madhya pradesh</option>
                <option>Himachal pradesh</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            {/* </Form.Row> */}
            <Form.Group>
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
