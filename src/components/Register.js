import React, { useEffect, useState } from "react";
import { MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import * as action from "../actions/companyData";
import "./Register.css";
import { useHistory, useParams } from "react-router-dom";

function Register(props) {
  const { id } = useParams();
  const history = useHistory();

  const [companyValue, setCompanyValue] = useState({
    name: "",
    description: "",
    number: "",
    email: "",
    city: "",
    state: "",
    logoUrl: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id != 0) {
      setCompanyValue({
        ...props.companyDataList.find((x) => x._id === id),
      });
      setErrors({});
    }
  }, [id]);

  // const record = props.companyDataList[0];
  // console.log("<><><><>", props.companyDataList);

  const validate = () => {
    let temp = { ...errors };
    temp.name = companyValue.name ? "" : "This field is required.";
    temp.description = companyValue.description
      ? ""
      : "This field is required.";
    temp.email = companyValue.email ? "" : "This field is required.";
    temp.number = companyValue.number ? "" : "This field is required.";
    temp.logoUrl = companyValue.logoUrl ? "" : "This field is required.";
    temp.state = companyValue.state ? "" : "This field is required.";
    temp.city = companyValue.city ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const onSuccess = () => {
      window.alert("Submitted successfully");
    };
    if (validate()) {
      if (id === undefined) {
        props.crateCompanyData(companyValue, onSuccess);
      } else {
        props.updateCompanyData(id, companyValue, onSuccess);
        history.push("/");
      }
    }
  };

  const onInputChange = (event) => {
    setCompanyValue({
      ...companyValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="register">
      <h2 className=" register__heading">Register your Company</h2>
      <form
        className="needs-validation"
        onSubmit={submitHandler}
        noValidate
        autoComplete="off"
      >
        <MDBCol md="6">
          <MDBInput
            className="text__color"
            name="name"
            type="text"
            id="materialFormRegisterNameEx"
            label="Company Name"
            value={companyValue.name}
            onChange={onInputChange}
            required
            {...(errors.name && { error: true, helperText: errors.name })}
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            className="text__color"
            name="description"
            type="textarea"
            rows={6}
            id="materialFormRegisterNameEx"
            label="Company Description"
            value={companyValue.description}
            onChange={onInputChange}
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            className="text__color"
            name="number"
            type="number"
            id="materialFormRegisterNameEx"
            label="Mobile Number"
            value={companyValue.number}
            onChange={onInputChange}
            required
            {...(errors.name && { error: true, helperText: errors.name })}
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            className="text__color"
            name="email"
            type="text"
            id="materialFormRegisterNameEx"
            label="Email"
            value={companyValue.email}
            onChange={onInputChange}
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            className="text__color"
            name="logoUrl"
            type="textarea"
            rows={2}
            id="materialFormRegisterNameEx"
            label="Logo URL"
            value={companyValue.logoUrl}
            onChange={onInputChange}
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            className="text__color"
            name="state"
            type="text"
            id="materialFormRegisterNameEx"
            label="State"
            value={companyValue.state}
            onChange={onInputChange}
            autoComplete="off"
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            className="text__color"
            name="city"
            type="text"
            id="materialFormRegisterNameEx"
            label="City"
            value={companyValue.city}
            onChange={onInputChange}
            autoComplete="off"
            required
          >
            <div className="valid-feedback">Looks good!</div>
          </MDBInput>
        </MDBCol>
        <button type="submit" className="btn btn-primary">
          {id === undefined ? "Submit" : "Update"}
          {/* Submit */}
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
  fetchOneCompanyData: action.fetchOne,
};
export default connect(mapStateToProps, mapActionToProps)(Register);
