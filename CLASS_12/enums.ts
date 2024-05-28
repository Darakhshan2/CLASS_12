// jb hamen group of constant bana ho ya constant value ko store krna hai to jb enums use krty hen 
// enum provide type safty
// array update ho skti hia is liye enum banaty hen 
// enums : group of constant which are unupdateable
// vales access like object 
// enums ki har property ky sath value attach hoti hai jo start hoti hia 0 sy or then increase 
// isy hum key kyk ilawa value jo attach hoti hai us sy bh get krskty hen  
// enum ko as a type bh use krskty hen 
// enum ki values modified hoskti hen 
// iffe : hw imediate invokes functions
// enums alternatives " literal typing or union "
enum Days {
    Monday ,  // monday = 9 update 
    Tuesday,
    Wednesday,
    Thursday
}

let currentDays:Days  =  Days.Monday // Days[0]
// console.log(Days.Monday);// key se access
// console.log(Days["Monday"]); // key sy 
// console.log(Days[0]); // value sy 


// alternative
let day :  "Monday" | "Tuesday" | "wednesday " = "Monday"
console.log(day);

//hw : enums practice or const enum also diffrence   