import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as action from "../actions/companyData";
import "./Home.css";

function CompanyDetails(props) {
  const { id } = useParams();
  const history = useHistory();

  // const [company, setCompany] = useState();

  useEffect(() => {
    props.fetchOneCompanyData(id);
  }, []);

  const company = props.companyDataList[0];
  console.log("<><><><>", company);

  return (
    <div className="companyDetail">
      <h1 className="company__name">{company.name}</h1>
      <div className="company__info">
        <div className="company__logo">
          <img src={company.logoUrl} alt="" />
        </div>
        <div className="company__desc">
          <p>{company.description}</p>
        </div>
      </div>
      {/* <div className="company__contact">
        <p>{company.email}</p>
        <p>{company.number}</p>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  companyDataList: state.companyData.list,
});

const mapActionToProps = {
  fetchOneCompanyData: action.fetchOne,
};

export default connect(mapStateToProps, mapActionToProps)(CompanyDetails);
