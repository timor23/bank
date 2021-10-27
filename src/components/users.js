import React from "react";
import axios from "axios";

const Users = ({user}) => {
    const [userData, setUserData] = React.useState([])
    const [balance, getBalance] = React.useState(500);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios.get(`https://6178f9f3aa7f340017404669.mockapi.io/users/${user.id}/bank`).then(res => {
            setUserData(res.data);
            calculateBalance();
            console.log(res.data[0].cash);
        });
    }
    const checkBalance = () => {
        let countMoney = userData.map(usr => {
            if (usr.isWithdrawal) {
                userData.reduce((prev, value) => {
                    console.log(prev)
                    console.log(value)
                })
            }
        })
    }

    const calculateBalance = () => {
        let balance = 0;
        userData.map(usr=>{

            balance = usr.isWithdrawal ? balance + usr.cash : balance - usr.cash;
        })
        console.log(balance)
    }

    return (<div></div>)
}

export default Users;