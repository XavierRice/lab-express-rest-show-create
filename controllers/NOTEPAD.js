
// const express = require("express");
// const logs = express.Router();
// const logsArr = require("../models/logs_model");
// const {AlphabetSort, MistakesFilters, CrisisFilter } = require('./functions_views')

// logs.get("/", (req, res) => {

//   const { sortedOrder, sortedMistakes, sortedLastCrisis } = req.query

//   const filteredLogs = logsArr.slice();

//   if (sortedOrder === "acs") {
    
//     const ascAlphabetArr = filteredLogs.sort((a, b) => {                        //COULD MOVE TO VIEW
//       for (let i = 0; i < Math.min(a.title.length, b.title.length); i++) {
//         // if one strings is shorter we get undefined. By limiting the loop to the min length we only compare the charters we have

//         const charAstrings = a.title.charCodeAt(i); //indexing a string using UTF-16 units to return lone numbers
//         const charBstrings = b.title.charCodeAt(i);
//         if (charAstrings !== charBstrings) {
//           return charAstrings - charBstrings;
//         }
//       }
//       return a.title.length - b.title.length; //shorter words first
//     });

//     if (ascAlphabetArr.length === 0){  //checking for empty arr.
//       res.status(420).send("asending array is off");
//     } else {
//       console.log(ascAlphabetArr)
//       res.json(ascAlphabetArr);
//     }


//   } else if (sortedOrder === "desc") {

//     const descAlphabetArr = filteredLogs.sort((a, b) => // I wanted to use localeCompare. //COULD MOVE TO VIEW
//       b.title.localeCompare(a.title, 'en', {sensitivity: 'case'})
//     );

//     if (descAlphabetArr.length === 0) {
//       res.status(420).send("decending array is off");
//     } else {
//       console.log(descAlphabetArr)
//       res.json(descAlphabetArr);
//     }
//   } else if (sortedMistakes === true) {

//     const mistakesTLogs = filteredLogs.filter((log) => { //COULD MOVE TO VIEW
//       return log.mistakesWereMadeToday;
//     }
//     );

//     if (mistakesTLogs.length === 0) {
//       res.status(420).send("error with ur simple filter");
//     } else {
//       console.log(mistakesTLogs);
//       res.json(mistakesTLogs);
//     }

//   } else if (sortedMistakes === false) {
    
//          const mistakesFLogs = filteredLogs.filter((log) => {     //COULD MOVE TO VIEW
//          return !log.mistakesWereMadeToday;
//          });

//     if (mistakesFLogs.length === 0) {
//       res.status(420).send("error with ur simple filter");
//     } else {
//       console.log(mistakesFLogs);
//       res.json(mistakesFLogs);
//     }

//   } else if(lastCrisis === "gt10"){

//     let num = 10
  
//         const sortedLastCrisis = filteredLogs.filter((log) => {       //COULD MOVE TO VIEW 
//           return log.daysSinceLastCrisis > num;
//          }
//     );

//     if (sortedLastCrisis.length === 0){
//         res.status(420).send("Length is off size queen")
//     } else {
//         console.log(sortedLastCrisis);
//         res.json(sortedLastCrisis)
//     }
//   }

// } 
// );


// logs.get("/:arrNum", (req, res) => {
//   const { arrNum } = req.params;
//   if (logsArr[arrNum]) {
//     console.log(logsArr[arrNum])
//     res.json(logsArr[arrNum]);
//   } else {
//     res.status(404).send(`nothing is found on : ${arrNum}`);
//   }
// });

// module.exports = logs;