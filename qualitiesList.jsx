import React from "react";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((item) => (
        <span
          className={"badge border-radius m1 bg-" + item.color}
          key={item.id + item.name}
        >
          {item.name}
        </span>
        //
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired
};

export default QualitiesList;
