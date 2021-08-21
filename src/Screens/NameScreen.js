import React, { useState } from 'react'
import './name.css'

function NameScreen({ history }) {
    const [userName, setUserName] = useState("")

    const SubmitForm = (e) => {
        e.preventDefault();

        if (userName.length === 0) {
            alert("Please fill data");
            return;
        }
        window.localStorage.setItem('userName', userName);
        history.push('/main');
    }

    return (
        <div>
            <h2>You can watch real time watch and calender<br /> just enter your name<br />
                and go furthure</h2>

            <form action="" onSubmit={SubmitForm}>
                <div>
                    <label htmlFor="luckyName" >Enter your Name </label>
                    <input type='text' id='luckyName' value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    )
}

export default NameScreen
