import { Walk } from "../walk/Walk";
import { WalksListPropsIntf } from "../../model/WalksListPropsIntf";
import "./WalksList.css";

export const WalksList = (props: WalksListPropsIntf) => {

  return (
    <div className="walks-container">
      {props.items.map((item) => <Walk 
        key={item.date.toString()} 
        date={item.date} 
        distance={item.distance}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
           />)}  
    </div>
  );
}