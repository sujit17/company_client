import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as action from "../actions/companyData";
import { Link } from "react-router-dom";
import "./Home.css";
import { Alert, Button, Form, FormControl } from "react-bootstrap";
import Pagination from "./Pagination";

function Home(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllCompanyData();
  }, []);

  //Delete
  const deleteCompany = (id) => {
    const onSuccess = () => {
      alert(`Record deleted from DB.`);
    };
    props.deleteData(id, onSuccess);
  };

  // ASC/DSC
  const [sortType, setSortType] = useState("asc");
  const companyData = props.companyDataList.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.name.localeCompare(b.name);
  });
  console.log(companyData);

  //Pagination
  const [showPerPage, setShowPerPage] = useState(2);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  //Dropdown

  return (
    <div className="container">
      <div className="home__bar">
        <Form inline className="home__search">
          <FormControl
            type="text"
            placeholder="Search ....."
            className="mr-sm-2"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Form>

        <div className="home__asc__dsc__button">
          <Button
            variant
            className="mr-1"
            onClick={() => {
              setSortType("asc");
            }}
          >
            ASC
          </Button>
          <Button
            variant
            className="mr-1"
            onClick={() => {
              setSortType("dsc");
            }}
          >
            DSC
          </Button>
        </div>
      </div>

      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* .slice(pagination.start, pagination.end) */}
            {props.companyDataList
              .slice(pagination.start, pagination.end)
              .filter((company) => {
                if (searchTerm === "") {
                  return company;
                } else {
                  if (
                    company.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return company;
                  }
                }
              })
              .map((company, index) => (
                <tr key={company._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{company.name}</td>
                  <td>
                    {company.description.substring(0, 80)}
                    <Link to={`/details/${company._id}`}>
                      <a className="home__link"> ... Read More</a>{" "}
                    </Link>
                  </td>
                  <td>{company.email}</td>
                  <td>{company.number}</td>
                  <td className="action__buttons">
                    <Link
                      class="btn btn-primary mr-2"
                      to={`/details/${company._id}`}
                    >
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/registration/${company._id}`}
                      // onClick={() => setCurrentId(company._id)}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger mr-2"
                      onClick={() => deleteCompany(company._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={companyData.length}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  companyDataList: state.companyData.list,
});

const mapActionToProps = {
  fetchAllCompanyData: action.fetchAll,
  deleteData: action.Delete,
};
//props.fetchAllCompanyData
export default connect(mapStateToProps, mapActionToProps)(Home);
