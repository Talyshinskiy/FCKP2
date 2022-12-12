import React from "react";

const QualitiesList = ({ id, name, color, qualities }) => {
  console.log("qualities", qualities);
  return (
    <th key={id}>
      {qualities.map((item) => (
        <span
          className={"badge border-radius m1 bg-" + item.color}
          key={id + name}
        >
          {name}
        </span>
        //
      ))}
    </th>
  );
};
export default QualitiesList;
