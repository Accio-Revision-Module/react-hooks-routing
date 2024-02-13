import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    // const getUsers = async () => {
    //     const url = "https://jsonplaceholder.typicode.com/users";
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();

    //         setUsers(data);
    //     } catch (e) {
    //         console.log(e);
    //         setError(e);
    //     }
    // }

    const getUsers = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        try {
            const response = await axios.get(url);
            setUsers(response.data);
        } catch (e) {
            console.log(e);
            setError(e);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <div>
        {error && <p>Error: {error.toString()}</p>}
        <h1>Users</h1>

        {users.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
                <p>{user.name}</p>
            </Link>
        ))}
    </div>
  )
}

export default Users