import React from "react";
import Table from "../Table/Table";

function Container(props) {
  return (
    <div className="container-fluid">
      <Table {...props} />
    </div>
  );
}

export default Container;
