import React from "react";
import PropTypes from "prop-types";

const renderPhrase = (number) => {
  const lastOne = Number(number.toString().slice(-1));
  // console.log("number", number);
  if (number > 4 && number < 15) {
    return <>{number} человек тусанет с тобой сегодня</>;
  } else if ([2, 3, 4].indexOf(lastOne) >= 0) {
    return <>{number} человека тусанет с тобой сегодня</>;
  } else if (number === 1) {
    return <>{number} человек тусанет с тобой сегодня</>;
  }
};

const SearchStatus = (length) => {
  // console.log(props , "proqsdqsdps");
  return (
    <h1>
      <span
        className={
          "badge border-radius bg-" + (length.length > 0 ? "primary" : "danger")
        }
      >
        {renderPhrase(length.length)}
      </span>
    </h1>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
};

export default SearchStatus;
