import React, {useEffect, useState} from 'react';


function LogIn() {
    return(
            <>
                <h1>Log In</h1>
                <label>Username:</label>
                <br/>
                <input id='usernameInput'></input>
                <br/>
                <br/>
                <label>Password:</label>
                <br/>
                <input id='passwordInput'></input>
                <br/>
                <br/>
                <button>Log in</button>
            </>
        );
}

// function OnLoginBtnClick() {
//     let loginData = {username, password};
//     loginData.username = usernameInput.value;
// }

function useDate() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let id = setInterval(() => {
            updateTime();
        }, 1000);

        return () => {
            clearInterval(id);
        };
    });

    function updateTime() {
        setTime(new Date);
    }

    return time;
}

export default LogIn;