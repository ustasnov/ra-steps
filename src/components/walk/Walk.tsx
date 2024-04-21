import { WalkPropsIntf } from "../../model/WalkPropsIntf";
import { convertDateToString } from "../../utils/dateutils";
import "./Walk.css";

export const Walk = (props: WalkPropsIntf) => {
  const editSimbol = "\u270E";
  const deleteSimbol = "\u2715";

  return (
    <div className="walk-container">
      <div className="walk-date">{convertDateToString(props.date)}</div>
      <div className="walk-distance">{props.distance}</div>
      <div className="btn-container">
        <button className="btn edit-btn" onClick={props.onEdit}>{editSimbol}</button>
        <button className="btn delete-btn" onClick={props.onDelete}>{deleteSimbol}</button>
      </div>
    </div>
  );
}
