// Mastering Dates in js

// Prerequisites

// 1. Time Zones

// 2. GMT (Greenwich Mean Time) Time Zone (UK)

// 3. UTC (Condinated Universal Time) (UK)

// 4. ISO Standard (International Organization for Standardization)

// Date and time in UTC: 2025-01-11T05:01:01.500Z (UK)

// Date and time in India:2025-01-11T10:31:01+05:30  (UTC+05:30 / India)

// 5. Unix Time and Unix Epoch (1970, 1st jan, 00.00.00 AM)

//

const myDate = new Date();

console.log("My Date:", myDate); // Tue Oct 07 2025 20:05:55 GMT+0530 (India Standard Time)  Object

// ----------- Get methods -----------

console.log("Get Time:", myDate.getTime()); // 1759842247375

console.log(
  "Date:",
  myDate.getDate(),
  "Month:",
  myDate.getMonth(), // starts from 0 = january
  "FullYear:",
  myDate.getFullYear(),
  "Day:",
  myDate.getDay(), // starts from 0 = sunday

  "Hours:",
  myDate.getHours(),
  "Minutes:",
  myDate.getMinutes(),
  "Seconds:",
  myDate.getSeconds(),
  "MiliSec:",
  myDate.getMilliseconds(),
  "Time Zone Offset",
  myDate.getTimezoneOffset() // returns -330 (because IST is 5h 30m ahead of UTC)
);

// ----------- To methods ----------

console.log("To string:", myDate.toString()); // Tue Oct 07 2025 20:06:17 GMT+0530 (India Standard Time)  string

// we need to pass {hour12: true} for AM/PM.
console.log(
  "To locale string:",
  myDate.toLocaleString("en-GB", { hour12: true })
); // 07/10/2025, 6:34:13 pm  (ist)

console.log("To DateString:", myDate.toDateString()); // To DateString: Wed Oct 08 2025

console.log("To Locale DateString:", myDate.toLocaleDateString("en-GB")); // 07/10/2025 (ist)

console.log("To TimeString:", myDate.toTimeString()); // To TimeString: 22:55:57 GMT+0530 (India Standard Time)

console.log(
  "To Locale TimeString:",
  myDate.toLocaleTimeString("en-In", { timeStyle: "long" })
); // To Locale TimeString: 10:57:42 pm IST

console.log("To ISO String:", myDate.toISOString()); // ISO String: 2025-10-07T14:28:07.304Z (UTC)

console.log("To JSON String:", myDate.toJSON()); // JSON String: 2025-10-07T14:34:31.840Z (UTC)

console.log("To UTC string:", myDate.toUTCString()); // Tue, 07 Oct 2025 14:39:13 GMT (UTC)

// --------------------

const newDate = new Date(0); // (Fixed)
console.log("New Date:", newDate.toLocaleString("en-IN")); // New Date: 1/1/1970, 5:30:00 am  (FIXED)

console.log("Current Time:", Date.now()); // Current Time: 1759891145823

const myDOB = "26/01/1999";
const myIsoDOB = "1999-01-26T12:00:00.300Z";

// MM/DD/YYYY or, // YYYY/MM/DD or, ISO format  - accepted

const myDOBDate = new Date(myDOB.split("/").reverse().join("/"));

const myIsoDOBDate = new Date(myIsoDOB);

console.log("myDOB:", myDOBDate); // Tue Jan 26 1999 00:00:00 GMT+0530 (India Standard Time)

console.log("myIsoDOB:", myIsoDOBDate); // Tue Jan 26 1999 17:30:00 GMT+0530 (India Standard Time)

// ------------------------------

// YYYY, MM, DD , HH, mm, ss, mss
const userDOB = new Date(1999, 0, 26, 1, 30, 15, 600);

console.log("userDOB:", userDOB); // userDOB: Tue Jan 26 1999 01:30:15 GMT+0530 (India Standard Time)

//

// UTC string(ISO) format
const newDate2 = new Date("2025-01-26");

console.log(newDate2); // Sun Jan 26 2025 05:30:00 GMT+0530 (India Standard Time)

// Local string format
const newDate3 = new Date("2025/01/26");
console.log(newDate3); // Sun Jan 26 2025 00:00:00 GMT+0530 (India Standard Time)

// applying time
const newDate4 = new Date("2025/01/26 10:30:40:050");
console.log(newDate4); // Sun Jan 26 2025 10:30:40 GMT+0530 (India Standard Time)

// Local string format
const newDate5 = new Date("26 jan 2025");
console.log(newDate5); // Sun Jan 26 2025 00:00:00 GMT+0530 (India Standard Time)

//

function getFullMonthName(date) {
  return date.toLocaleDateString("en-IN", {
    month: "long",
  });
}

console.log(getFullMonthName(new Date())); // October

//

console.log(Date.now()); // 1759963976104

// all format supported
console.log(Date.parse("1999-01-26")); // 917308800000

console.log(Date.UTC(1999, 0, 26)); // 917308800000

