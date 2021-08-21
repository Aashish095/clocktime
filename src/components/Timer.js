import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './cal.css'

const Timer = () => {

    const [date, SetDate] = useState(new Date());

    const onChange = date => {
        SetDate(date);
    }

    return (
        <div>
            <div class="cal">
                <Calendar onChange={onChange} value={date} />
            </div>
            <br />
            <div className='time'>
                {date.toString()}
            </div>
        </div>
    )
}

export default Timer
