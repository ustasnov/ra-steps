import { WalkIntf } from "./WalkIntf";

export default class Storage {
  static sort(curData: WalkIntf[]) {
    return curData.sort(function (a, b): number {
      return b.date.getTime() - a.date.getTime();
    });
  }

  static loadData() {
    let dataArray: WalkIntf[] = [];
    const data = localStorage.getItem("walkdata");
    if (data) {
      dataArray = JSON.parse(data).map((el: WalkIntf) => {
        return { date: new Date(el.date), distance: el.distance }
      });
    }
    return Storage.sort(dataArray);
  }

  static saveData(curData: WalkIntf[]) {
    localStorage.setItem("walkdata", JSON.stringify(curData));
  }
}
