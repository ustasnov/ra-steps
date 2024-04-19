import {WalkIntf} from "./WalkIntf";

export interface WalkPropsIntf extends WalkIntf {
  onEdit: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void
}
