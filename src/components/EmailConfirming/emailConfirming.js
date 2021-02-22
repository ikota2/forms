import React from "react";
import { connect } from "react-redux";
import Title from "../Title/Title";

function mapStateToProps(state) {
  return {
    name: state.data.name,
    eMail: state.data.eMail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeData: (value) =>
      dispatch({ type: "CHANGE_DATA", field: "eMail", value }),
  };
}

export const EmailConfirming = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailConfirming_);
function EmailConfirming_({ name, eMail, changeData }) {
  function handleChange(event) {
    changeData(event.target.value.toLowerCase());
  }

  return (
    <>
      <Title
        title={`${
          name.charAt(0).toUpperCase() + name.slice(1)
        }, нам понадобится ваш E-Mail`}
        subtitle='Туда будет приходить важная информация от банков'
      />
      <label htmlFor='emailConfirming__input'>E-Mail </label>
      <input
        type='email'
        name='emailConfirming__input'
        id='emailConfirming__input'
        onChange={handleChange}
        value={eMail}
        required
      />
    </>
  );
}
