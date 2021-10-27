import React from "react";
import axios from "axios";
import Users from "./users";

const Bank = () => {

    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState("");
    const [userId, setUserId] = React.useState(1);


    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios.get("https://6178f9f3aa7f340017404669.mockapi.io/users")
            .then(res => {
                // console.log(res.data);
                setUsers(res.data);
            });
    }

    const handleClick = (e) => {
        let usr = users.find(ele => ele.id == userId);
        setUsers(usr);
    }

    const handleType = (e) => {
        setUserId(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder={"Enter user ID"} onChange={(e) => handleType(e)}/>
            <input type="button" value={"find"} onClick={handleClick}/>
            {/*{users.map(user => {*/}
            {/*    return <Users user={user}/>*/}
            {/*})}*/}
            <Users user={user} />

        </div>
    )
}

export default Bank;