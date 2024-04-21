import { WalkIntf } from "./WalkIntf";

export interface WalksListPropsIntf {
  items: WalkIntf[],
  onEdit: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void
}
