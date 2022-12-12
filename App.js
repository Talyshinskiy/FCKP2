import React, { useState } from "react";
import BookMark from "./componets/bookMark";
import User from './componets/user'
import Users from "./componets/users"
import SearchStatus from "./componets/searchStatus.jsx"
import api from "./api"




const App = () => {
    // const [users, setUsers] = useState();
    // console.log('123', users)

    // const handleDelete = (userId) => {
    //     setUsers(users.filter((user) => user._id !== userId));
    // };

    // setUser
    // console.log()
    // console.log("props", users);
    // console.log('api', api.users.fetchAll());

    // const handleDelete = (userId) => {
    //     setUsers(users.filter((user) => user._id !== userId));
    // };
    // let btnStyles = 'btn btn-danger sm-2"'
    // const isDown = false

    // const handleLike = (userId) => {
    //     // console.log("userId", userId);


    //     setUsers(users.map((user) => user._id === userId ? user.bookmark = !user.bookmark : console.log(user.bookmark))
    //         // {
    //         //     if (user._id === userId) {
    //         //         user.bookmark = !user.bookmark
    //         //     }

    //         //     return {
    //         //         // ...user,

    //         //     }
    //         // }

    //     );
    // };





    // if (users.length === 0) {
    //     return (
    //         <h1 className="badge badge-pill badge-warning bg-danger">
    //             <h2 className="">Никто с тобой не тусанет</h2>{" "}
    //         </h1>)
    // } else {
    return (
        <div>
            {/* <SearchStatus users={users.lenght} /> */}
            <Users />

        </div>
    );
}


// };




export default App