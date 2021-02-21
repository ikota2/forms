import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "../Link/Link";
import "./previousNextBtns.css";
import { checkField } from "../../functions/checkField";
import { fieldsAndValidation } from "../../functions/validate";
import { findByLabelText } from "@testing-library/react";

function PreviousNextBtns({ location, data }) {
  const activeStyle = {
    backgroundColor: "rgb(39, 219, 39)",
    color: "#fff",
  };
  const disabledStyle = {
    backgroundColor: "red",
    color: "white",
  };
  // function makeArrOfFunctions(obj, arr) {
  //   const functions = [];
  //   for (let link of arr) {
  //     functions.push(obj[link]);
  //   }
  //   return functions;
  // }
  //  function getBoolean() {
  //    const links = checkField(location.pathname);
  //    const functions = makeArrOfFunctions(fieldsAndValidation, links);
  //    const stateValues = [];
  //    for (let link of links) {
  //      stateValues.push(data[link]);
  //    }
  //   const booleans = [];
  //    for (let i = 0; i < functions.length; i++) {
  //      booleans.push(functions[i](stateValues[i]));
  //    }
  //    return booleans.every((boolean) => boolean);
  //  }

  console.log("🗽", checkField(location.pathname));
  const v = checkField(location.pathname)[0];
  console.log("✈️", fieldsAndValidation[v]);
  const isValid = checkField(location.pathname).every((key) =>
    fieldsAndValidation[key](data[key])
  );

  const links = [
    "/your-name",
    "/about-you",
    "/email",
    "/type-of-employment",
    "/choose-bank",
    "/choose-the-realty",
    "/income",
    "/resume",
  ];

  const currentLocationIndex = links.findIndex(
    (link) => link === location.pathname
  );
  console.log("LOCATION ---->", location, currentLocationIndex);

  const nextLink =
    links[
      currentLocationIndex + 1 === links.length ? 0 : currentLocationIndex + 1
    ];

  const previousLink =
    links[
      currentLocationIndex === 0 ? links.length - 1 : currentLocationIndex - 1
    ];

  // const indexOfLastLink = function getLastIndex(links) {
  //   for (let i = links.length; i--; ) {
  //     return i;
  //   }
  // };

  if (currentLocationIndex === 0) {
    return (
      <div className='bottomButtons'>
        <Link to={nextLink} disabled={!isValid}>
          Далее
        </Link>
      </div>
    );
  }
  return (
    <div className='bottomButtons'>
      <Link to={previousLink}>Назад</Link>
      <Link to={nextLink} disabled={!isValid}>
        Далее
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(withRouter(PreviousNextBtns));
