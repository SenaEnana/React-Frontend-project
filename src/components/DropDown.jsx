import React from "react";

const DropDown = ({ options, onChange, label, name }) => {
  return (
    <div className="col-12 row">
      <label className="float-start" htmlFor="option">
        {label}
      </label>
      <div>
        <select
          className="form-control mb-3"
          id="option"
          name={name}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
