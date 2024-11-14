// 今日の日付
const today = new Date();

// 年、月、日
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// コンソール 年月日 出力
console.log((year) + "年" + (month) + "月" + (day) + "日");