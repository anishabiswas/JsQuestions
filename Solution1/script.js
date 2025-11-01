const houses = [];
const studentsGrouping = (arr) => {
  for (student of arr) {
    if (student.length < 6) {
      houses.push("Grryfindor");
    } else if (student.length < 8) {
      houses.push("HufflePuff");
    } else if (student.length < 12) {
      houses.push("Ravenclov");
    } else {
      houses.push("slytherin");
    }
  }
  return houses;
};
const students = [
  "Radhey",
  "Shyam",
  "riya",
  "merry",
  "tendulkar",
  "aditya",
  "panchali",
  "washington",
  "MarieJulfiqar",
];
const result = studentsGrouping(students);
console.log(result);
