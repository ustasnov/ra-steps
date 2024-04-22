import { useState } from 'react';
import { WalksList } from "../walkslist/WalksList";
import Storage from "../../model/Storage";
import { getDateStr } from "../../utils/dateutils";
import "./Walks.css";

export const Walks = () => {
  const [data, setState] = useState(Storage.loadData());
  const [formData, setData] = useState({ date: getDateStr(new Date()), distance: "0" });
  const [mode, setMode] = useState("add");

  const onEditHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const walkEl = e.currentTarget.closest(".walk-container");
    const walkDateStr = walkEl?.querySelector(".walk-date")?.textContent?.split(".").reverse().join("-");
    const walkDistanceStr = walkEl?.querySelector(".walk-distance")?.textContent;
    if (walkDateStr && walkDistanceStr) {
      setData({ date: walkDateStr, distance: walkDistanceStr });
      setMode("edit");
    };
  }

  const onDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!confirm("Удалить запись?")) { return; }

    const walkEl = e.currentTarget.closest(".walk-container");
    const dateStr = walkEl?.querySelector(".walk-date")?.textContent?.split(".").reverse().join("-");
    if (!dateStr) { return; };

    const newData = data.slice();
    const idx = newData.findIndex((el => el.date.getTime() === new Date(dateStr).getTime()));
    
    if (idx > -1) {
      newData.splice(idx, 1);
      Storage.saveData(newData);
      setState(newData);
    }
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let walkDate: Date = new Date();
    let walkDistance: number = 0;

    const formData = new FormData(e.currentTarget);
    const date = formData.get("date");
    const distance = formData.get("distance");
    if (date && distance) {
      walkDate = new Date(date.toString());
      walkDistance = Number.parseFloat(distance.toString());
    } else {
      return;
    }

    const newData = data.slice();
    const walk = newData.find((el => el.date.getTime() === new Date(walkDate).getTime()));
    if (walk) {
      if (mode === "add") { 
        walk.distance += walkDistance; 
      } else {
        walk.distance = walkDistance; 
      }
    } else {
      newData.push({ date: walkDate, distance: walkDistance });
    }

    Storage.saveData(newData);
    setState(Storage.sort(newData));
    setMode("add");
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let val = value;
    if (name === "distance" && value.indexOf(".") != -1) { 
      val = val.substring(0, value.indexOf(".") + 2);
    }
    setData(prevFormData => ({ ...prevFormData, [name]: val }));
  }

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={onSubmitHandler}>
        <label>Дата (ДД.ММ.ГГГГ)
          <input className="input input-date" name="date" type="date" value={formData.date}
            onChange={onChangeHandler}></input>
        </label>
        <label>Пройдено км.
          <input className="input input-distance" name="distance" type="number" step="0.1"
            value={formData.distance} onChange={onChangeHandler}></input>
        </label>
        <button className='btn-ok' type="submit">OK</button>
      </form>
      <div className="list-header">
        <div className="header-date">Дата (ДД.ММ.ГГГГ)</div>
        <div className="header-distance">Пройдено км.</div>
        <div className="header-actions">Действия</div>
      </div>
      <WalksList items={data} onEdit={onEditHandler} onDelete={onDeleteHandler} />
    </div>
  );
}
