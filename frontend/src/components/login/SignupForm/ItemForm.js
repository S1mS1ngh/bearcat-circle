import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <h6>{label}</h6>
        <input className="form-control" type={type} {...otherProps} />
      </>
    ) : (
      <>
        <h6>{label}</h6>
        <input className="form-control" type={type} {...otherProps} />
      </>
    )}
  </div>
);

export default ItemForm;
