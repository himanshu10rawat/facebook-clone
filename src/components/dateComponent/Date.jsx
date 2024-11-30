export const currentDate = new Date().getDate();
export const currentMonth = new Date().getMonth();
export const currentYear = new Date().getFullYear();

export const yearList = [];
for (let index = currentYear; index >= currentYear - 100; index--) {
  yearList.push(index);
}

export const monthsList = [];
for (let i = 0; i < 12; i++) {
  const date = new Date(0, i);
  monthsList.push(date.toLocaleString("default", { month: "long" }));
}

export const dateList = [];
for (let index = 1; index <= 31; index++) {
  dateList.push(index);
}
