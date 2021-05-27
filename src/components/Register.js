import React, { useState } from "react";
import { MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import * as action from "../actions/companyData";
import "./Register.css";

function Register(props) {
  // const intialState = {
  //   name: {
  //     value: "",
  //     valid: false,
  //   },
  //   description: {
  //     value: "",
  //     valid: false,
  //   },
  //   number: {
  //     value: "",
  //     valid: false,
  //   },
  //   email: {
  //     value: "",
  //     valid: false,
  //   },
  //   city: {
  //     value: "",
  //     valid: false,
  //   },
  //   state: {
  //     value: "",
  //     valid: false,
  //   },
  //   logoUrl: {
  //     value: "",
  //     valid: false,
  //   },
  // };

  const [company, setCompany] = useState({
    name: {
      value: "",
      valid: false,
    },
    description: {
      value: "",
      valid: false,
    },
    number: {
      value: "",
      valid: false,
    },
    email: {
      value: "",
      valid: false,
    },
    city: {
      value: "",
      valid: false,
    },
    state: {
      value: "",
      valid: false,
    },
    logoUrl: {
      value: "",
      valid: false,
    },
  });

  const [companyValue, setCompanyValue] = useState({
    name: "",
    description: "",
    number: "",
    email: "",
    city: "",
    state: "",
    logoUrl: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const onSuccess = () => {
      window.alert("Added Your Company");
    };

    props.crateCompanyData(companyValue, onSuccess);
  };

  const onInputChange = (event) => {
    setCompany({
      ...company,
      [event.target.name]: {
        value: event.target.value,
        valid: !!event.target.value,
      },
    });
    setCompanyValue({
      ...companyValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="register">
      <h2 className=" register__heading">Register your Company</h2>
      <form className="needs-validation" onSubmit={submitHandler} noValidate>
        <MDBCol md="4">
          <MDBInput
            className={`text__color ${
              company.name.valid ? "is-valid" : "is-invalid"
            }`}
            name="name"
            type="text"
            id="materialFormRegisterNameEx"
            label="Company Name"
            value={company.name.value}
            onChange={onInputChange}
            autocomplete="off"
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="4">
          <MDBInput
            className={`text__color ${
              company.description.valid ? "is-valid" : "is-invalid"
            }`}
            name="description"
            type="textarea"
            rows={5}
            id="materialFormRegisterNameEx"
            label="Company Description"
            value={company.description.value}
            onChange={onInputChange}
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="4">
          <MDBInput
            className={`text__color ${
              company.number.valid ? "is-valid" : "is-invalid"
            }`}
            name="number"
            type="number"
            id="materialFormRegisterNameEx"
            label="Mobile Number"
            value={company.number.value}
            onChange={onInputChange}
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="4">
          <MDBInput
            className={`text__color ${
              company.email.valid ? "is-valid" : "is-invalid"
            }`}
            name="email"
            type="text"
            id="materialFormRegisterNameEx"
            label="Email"
            value={company.email.value}
            onChange={onInputChange}
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="4">
          <MDBInput
            className={`text__color ${
              company.logoUrl.valid ? "is-valid" : "is-invalid"
            }`}
            name="logoUrl"
            type="text"
            id="materialFormRegisterNameEx"
            label="Logo URL"
            value={company.logoUrl.value}
            onChange={onInputChange}
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="4">
          <MDBInput
            className={`text__color ${
              company.state.valid ? "is-valid" : "is-invalid"
            }`}
            name="state"
            type="text"
            id="materialFormRegisterNameEx"
            label="State"
            value={company.state.value}
            onChange={onInputChange}
            autocomplete="off"
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="4">
          <MDBInput
            className={`text__color ${
              company.state.valid ? "is-valid" : "is-invalid"
            }`}
            name="city"
            type="text"
            id="materialFormRegisterNameEx"
            label="City"
            value={company.city.value}
            onChange={onInputChange}
            autocomplete="off"
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  companyDataList: state.companyData.list,
});

const mapActionToProps = {
  crateCompanyData: action.create,
  updateCompanyData: action.update,
};
export default connect(mapStateToProps, mapActionToProps)(Register);
