import React from "react";
import axios from "axios";

const Users = ({user}) => {
    const [userData, setUserData] = React.useState([])
    const [balance, setBalance] = React.useState(0);
    const [cash, setCash] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    React.useEffect(() => {
        calculateBalance();
    }, [userData])

    const getData = async () => {
        await axios.get(`https://6178f9f3aa7f340017404669.mockapi.io/users/${user.id}/bank`).then(res => {
            setUserData(res.data);
        });
    }

    const calculateBalance = () => {
        let arr = [];
        userData.map(usr => {
            console.log("cash: ", usr.cash);

            (usr.isWithdrawal) ? arr.push(usr.cash * -1) : arr.push(usr.cash);
            console.log(arr);

            let arrSum = arr.reduce((a, b) => a + b, 0)
            console.log("balance: ", arrSum);

            setBalance(arrSum);
        })
    }

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h3>Account Balance: <span style={{color: balance < 0 ? "red" : "green"}}>{balance}</span></h3>
        </div>
    )
}

export default Users;