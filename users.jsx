import React, { useState } from "react";
import App from "../App";
import api from "../api";
// import favourite from "../../assets/img/favourite.png";
// import notFavourite from "../assets/img/notFavourite.png";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  // console.log(users);
  // const user = users.map((user) => console.log(user));

  return users;

  // const getUser = users.map((user) => console.log(user));

  return <div>123qwqw</div>;
};

export default Users;
