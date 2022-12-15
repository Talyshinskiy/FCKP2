import React from "react";
import BookMark from "./bookMark";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

// import { useState } from "react";
// import User from './componets/User'
// import Users from "./users";
// import SearchStatus from "./componets/searchStatus.jsx";
// import api from "../api";

const User = ({ user, onDelete, onLike }) => {
  // const user = users.map((user) => console.log(user));

  // console.log("users.users", users);

  return (
    <tr key={user.id + user.name}>
      <td>{user.name}</td>

      <td>
        <QualitiesList
          key={user.id}
          id={user.id}
          name={user.name}
          color={user.color}
          qualities={user.qualities}
        />
      </td>
      <th>{user.profession.name}</th>
      <th>{user.completedMeetings}</th>
      <th>{user.rate} / 5</th>
      <th>
        <button
          type="button"
          className="btn btn btn-sm"
          onClick={() => onLike(user._id, user.bookmark)}
        >
          <BookMark bookmark={user.bookmark} />
        </button>
      </th>
      <th>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired
};

export default User;
