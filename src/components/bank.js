import React from "react";
import axios from "axios";
import Users from "./users";
import Transfer from "./transfer";
import InputButtons from "./inputButtons";

const Bank = () => {
    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState(null);
    const [userId, setUserId] = React.useState(1);
    const [transAmount, setTransAmount] = React.useState(0);


    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios.get("https://6178f9f3aa7f340017404669.mockapi.io/users")
            .then(res => {
                console.log('sdadasdasdasdasdas', res.data);
                setUsers(res.data);
            });
    }
    const handleClick = () => {
        let usr = users.find(ele => ele.id === userId);
        console.log(usr);
        setUser(usr);

    }


    const handleType = (e) => {
        if (e.target.getAttribute("data-whatToAdd") === "id") {
            setUserId(e.target.value);
        }
        if (e.target.getAttribute("data-whatToAdd") === "deposit") {
            console.log(e.target.value);
        }
        if (e.target.getAttribute("data-whatToAdd") === "withdraw") {

        }
        if (e.target.getAttribute("data-whatToAdd") === "transfer") {
            setTransAmount(e.target.value);
        }


        }

    const calculateBalance = (userData) => {
        return new Promise((resolve, reject) => {
            let arr = [];
            userData.map(usr => {
                (usr.isWithdrawal) ? arr.push(usr.cash * -1) : arr.push(usr.cash);
                let arrSum = arr.reduce((a, b) => a + b, 0)
                console.log("balance: ", arrSum);

                resolve(arrSum);
            })
        });
    }


    return (
        <div>
            <input type="text" placeholder={"Enter user ID"} data-whatToAdd={"id"} onChange={(e) => handleType(e)}/>
            <input type="button" value={"find"} onClick={handleClick}/>
            {user === null ? users.map(user => {
                return ""
            }) : <div>
                <h1>Welcome</h1>
                <img src={user.avatar}/>
                <h2>{user.name}</h2>
                <h3> Account Number: {user.accountNumber}</h3>
                <Users user={user} calcBalance={calculateBalance}/>
                <label htmlFor="deposit">Deposit: </label>
                {/*<input className={"deposit"} type="text" placeholder={"Enter Amount"}/>*/}
                <InputButtons attribute={"deposit"} inputHandlerCallback={handleType} />
                <input type="button" value={"Deposit"}/>
                <br/><br/>
                <label htmlFor="withdraw">Withdraw: </label>
                <InputButtons attribute={"withdraw"} placeholder={"Enter Amount"} inputHandlerCallback={handleType} />
                <input type="button" value={"Withdraw"}/>
                <br/><br/>
                <label htmlFor="transfer">Transfer: </label>
                <InputButtons attribute={"transfer"} placeholder={"Enter Amount"} inputHandlerCallback={handleType} />
                <InputButtons attribute={"account"} placeholder={"Enter Account #"} inputHandlerCallback={handleType} />
                <input type="button" value={"Transfer"}/>
                {/*<Transfer />*/}
                <br/><br/>


            </div>}
            {/* {users.map(user => {
                return <Users user={user}/>
            })} */}
        </div>
    )
}


export default Bank;














