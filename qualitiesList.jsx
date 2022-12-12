import React from "react";

const QualitiesList = ({ id, name, color }) => {
  return (
    <span className={"badge border-radius m1 bg-" + color} key={id + name}>
      {name}
    </span>
  );
};
export default QualitiesList;
