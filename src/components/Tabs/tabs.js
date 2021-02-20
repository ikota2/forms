import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return {
    value: state.data[ownProps.name],
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: (value) =>
      dispatch({ type: "CHANGE_DATA", field: ownProps.name, value }),
  };
}

export const Tabs = connect(mapStateToProps, mapDispatchToProps)(Tabs_);
function Tabs_({ options, name, value, onChange }) {
  function handleChange(e) {
    onChange(e.currentTarget.value);
  }

  const selectedIndex = options.findIndex(
    (incomeType) => incomeType.key === value
  );
  const offset = `${(selectedIndex / options.length) * 100}%`;
  const width = `${100 / options.length}%`;

  return (
    <div
      className={
        selectedIndex === -1
          ? "income__radioblock"
          : "income__radioblock income__radioblock_checked"
      }
      style={{ "--offset": offset, "--width": width }}
    >
      {options.map((option) => (
        <React.Fragment key={option.key}>
          <label
            className={
              option.key === value
                ? "income__radioblock__label income__radioblock__label_selected"
                : "income__radioblock__label"
            }
          >
            <input
              type='radio'
              name={name}
              className='income__radioblock__input'
              value={option.key}
              onChange={handleChange}
            />
            {option.title}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}
