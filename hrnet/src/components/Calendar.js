import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
   

export default function Dates({ onChange, value, name }) {
    const [date, setDate] = useState(value);
  
    return (

    <div className="inputbox">
      <Calendar className="my-calendar" 
                value={value} 
                onChange={(e) => {
                    setDate(e.value);
                    onChange({ target: { name: name, value: e.value } });
                  }}
        />
    </div>
    );
  }