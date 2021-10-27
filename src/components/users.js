import React from "react";

const Users = ({user}) => {

    const [balance, getBalance] = React.useState(0);

    React.useEffect(()=>{
        calculateBalance();
    }, []);

    const calculateBalance = () => {

    }

    return(
        <div>
            {user.name}

        </div>
    )
}

export default Users;