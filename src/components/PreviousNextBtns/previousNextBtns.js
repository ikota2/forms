import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "../Link/Link";
import { checkField } from "../../functions/checkField";
import { fieldsAndValidation } from "../../functions/validate";
import "./previousNextBtns.css";

function PreviousNextBtns({ location, data }) {
  // the same as isValid:

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
  //console.log("LOCATION ---->", location, currentLocationIndex);

  const nextLink =
    links[
      currentLocationIndex + 1 === links.length ? 0 : currentLocationIndex + 1
    ];

  const previousLink =
    links[
      currentLocationIndex === 0 ? links.length - 1 : currentLocationIndex - 1
    ];

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
