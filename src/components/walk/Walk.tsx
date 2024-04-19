import { WalkPropsIntf } from "../../model/WalkPropsIntf";
import "./Walk.css";

export const Walk = (props: WalkPropsIntf) => {

  return (
    <div className="walk-container">
      <div className="walk-date">{props.date.toDateString()}</div>
      <div className="walk-distance">{props.distance}</div>
      <div className="btn-container">
        <button className="btn edit-btn" onClick={props.onEdit}>&#9998</button>
        <button className="btn delete-btn" onClick={props.onDelete}>&#10005</button>
      </div>
    </div>
  );
}