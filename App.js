import React, { useState } from "react";
import BookMark from "./componets/bookMark";
import User from './componets/user'
import Users from "./componets/users"
import SearchStatus from "./componets/searchStatus.jsx"
import api from "./api"




const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const { name, qualities, bookmark } = users
    console.log('name')
    // console.log(users.name, '123')
    // console.log("props", users);
    // console.log('api', api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    // let btnStyles = 'btn btn-danger sm-2"'
    const isDown = false

    const handleLike = (userId) => {
        setUsers(users.filter((user) => {
            if (user._id === userId) {
                console.log("props", userId);
                console.log("  user.bookmark", user.bookmark);
                user.bookmark = true
                console.log("  user.bookmark", user.bookmark);

            }
        }));
    };





    if (users.length === 0) {
        return (
            <h1 className="badge badge-pill badge-warning bg-danger">
                <h2 className="">Никто с тобой не тусанет</h2>{" "}
            </h1>)
    } else {
        return (
            <>
                <SearchStatus length={users.length} />
                <hr />
                {/* <Users />
                <Users
                // name={users.name}
                // qualities={users.qualities}
                // bookmark={users.bookmark}


                /> */}
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Качества</th>
                            <th>Профессия</th>
                            <th>Завершенные встречи</th>
                            <th>Оценка</th>
                            <th>Избранное</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => (
                            <tr key={item.id + item.name}>
                                <th>{item.name}</th>
                                <th>
                                    {item.qualities.map((item) => (
                                        <span
                                            className={"badge border-radius m1 bg-" + item.color}
                                            key={item.id + item.name}
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </th>
                                <th>{item.profession.name}</th>
                                <th>{item.completedMeetings}</th>
                                <th>{item.rate} / 5</th>
                                <th>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleLike(item._id)}
                                    >
                                        <BookMark
                                            status={item.bookmark}
                                            bookmark={item.bookmark} />

                                    </button>



                                    {/* 
                                    <BookMark
                                        bookMark={users.bookMark}
                                        id={item._id}
                                    /> */}
                                </th>
                                <th>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }


};




export default App