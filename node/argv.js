// this file is made to learn about node process //
// here is the official linkto learn node process https://nodejs.org/api/process.html //
const mission = process.argv[2];
// process.argv[2]; (argv is an node process) it is in array in second index //
// E:\web2023\javascript\node>          node argv.js explore  explore argument is passed at 2nd index
//let see how it works arguments indexno-(0)  (1)       (2) at no2 index we passed an argument //

if (mission === "learn") {
  console.log("Time to write some node code");
} else {
  console.log(`Is ${mission} really more fun?`);
}
