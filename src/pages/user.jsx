import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const {id} = useParams();    

    const getUsers = async () => {
        const url = "https://jsonplaceholder.typicode.com/users/" + id;
        try {
            const response = await axios.get(url);
            setUser(response.data);
        } catch (e) {
            console.log(e);
            setError(e);
        }
    }

    useEffect(() => {
        if(id != null) {
            getUsers();
        }
    }, [id])

  return (
    <div>
        <h1>User</h1>
        {error && <p>Error: {error.toString()}</p>}
        <p>ID: {id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default User