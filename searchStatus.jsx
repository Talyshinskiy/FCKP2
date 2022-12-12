import React, { useState } from "react";
import App from "../App";
import Users from "./users";

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

const SearchStatus = (props) => {
  // console.log(props.length, "length");
  return (
    <h1>
      <span
        className={
          "badge border-radius bg-" + (props.length > 0 ? "primary" : "danger")
        }
      >
        {renderPhrase(props.length)}
      </span>
    </h1>
  );
};

export default SearchStatus;

//  {/* <span
//             className={
//               "badge border-radius bg-" + (users.length > 0 ? "primary" : "danger")
//             }
//           >
//             {users.length > 0
//               ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня `
//               : `Никто с тобой не тусанет`}
//             готовы стобой
//           </span> */}
// const renderPhrase = (number) => {
//   // console.log(lastOne);
//   if (number > 4 && number < 15) return "Человек тусанет";
//   if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанут";
//   if (lastOne === 1) return "Человек тусанет";
//   return "Человек тусанет";
// };

// <span
//   className={
//     "badge border-radius bg-" + (props.length > 0 ? "primary" : "danger")
//   }
// >

//   {props.length > 0

//     ? `${props.length}  ${renderPhrase(props.length)} с тобой сегодня `
//     : `Никто с тобой не тусанет`}
//   готовы стобой
// </span>
