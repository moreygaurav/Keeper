import React from "react";

function Note({ id, name, phno }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mx-0 p-0">
      <div className="card col-lg-auto mx-2 my-3 d-flex flex-column justify-content-center  text-white" style={{height: "auto", borderRadius: "10px", backgroundColor: "#e9c3e9bf" }}>
        <h6> {id}</h6>
        <h4> Name:{name}</h4>
        <h4> phno:{phno}</h4>
      </div>
    </div>
  );
}

export default Note;
