import React from 'react'
import Calendar from '../components/Calender'
import Timer from '../components/Timer';
import './main.css'

function MainScreen() {
    const name = window.localStorage.getItem('userName');
    return (
        <>
            <div class="name">
                <h3>Welcome {name}</h3>
            </div>
            <br />
            <div class="main">
                <Timer />
                <br />
                <Calendar />
            </div>
        </>
    )
}

export default MainScreen
