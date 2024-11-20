import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import dayjs from 'dayjs';
import "dayjs/locale/es"
dayjs.locale("es");


export function MyDatePicker() {

const today = dayjs().format("DD/MM/YYYY");
// // const [startDate, setStartDate] = useState(today);

// const [selected, setSelected] = useState(<Date/>);
const [selected, setSelected] = useState(today);

  return (
    <DayPicker
    captionLayout="dropdown"
    timeZone="America/Buenos_Aires"
    weekStartsOn={1} 
  
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}