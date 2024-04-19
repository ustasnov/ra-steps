import { useState } from 'react';
import { WalksList } from "../walkslist/WalksList";
import {WalkIntf} from "../../model/WalkIntf"


export const Walks = () => {
  const [data, seState] = useState([
    {date: new Date(2024, 4, 19), distance: 4.2},
    {date: new Date(2024, 4, 18), distance: 2.1},
    {date: new Date(2024, 4, 17), distance: 3.5}
  ] as WalkIntf[]);

  const onEditHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

  } 

  const onDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const onOKHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <div className="main-container">
      <form className="form-container">
        <label>Дата (ДД.ММ.ГГ)
          <input className="date-input" type="date"></input>
        </label>
        <label>Пройдено км.
          <input className="date-input" type="number"></input>
        </label>
        <button className='btn-add' onClick={onOKHandler}>OK</button>
      </form>
      <WalksList items={data} onEdit={onEditHandler} onDelete={onDeleteHandler}/>
    </div>
  );
}