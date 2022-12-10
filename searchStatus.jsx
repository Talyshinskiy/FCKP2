import React, { useState } from "react";
import App from "../App";
import Users from "./users";

const renderPhrase = (number) => {
  console.log("number", number);
  if (number >= 5) {
    return <>{number} человек тусанет с тобой сегодня</>;
  } else if (number <= 4 && number >= 2) {
    return <>{number} человека тусанет с тобой сегодня</>;
  } else if (number === 1) {
    return <>{number} человек тусанет с тобой сегодня</>;
  }
};

const SearchStatus = ({ users, length, ...rest }) => {
  return (
    <h1>
      <span className="badge border-radius bg-primary">
        {renderPhrase(length)}
      </span>
    </h1>
  );
};

export default SearchStatus;
