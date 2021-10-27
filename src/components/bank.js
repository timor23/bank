import React from "react";
import axios from "axios";
import Users from "./users";

const Bank = () => {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios.get("https://6178f9f3aa7f340017404669.mockapi.io/users")
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
            });
    }



    return (
        <div>
            {users.map(user => {
                return <Users user={user}/>
            })}
        </div>
    )
}

export default Bank;