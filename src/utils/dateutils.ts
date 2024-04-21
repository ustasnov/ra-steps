export function convertDateToString(value: Date) {
  const dateSrc = value.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
  return dateSrc.split(".").join(".");
}

export function getDateStr(date: Date): string {
  const dateSrc = date.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
  return dateSrc.split(".").reverse().join("-");
}