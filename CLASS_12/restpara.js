// rest parameters 
// ye arguments accept krta hia unlimited parameter aik hi hota hai  
// rest para hamesha last mn banaty hen 
// rest parameter ki type array  
// 
function abc(name) {
    var teacherName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        teacherName[_i - 1] = arguments[_i];
    }
    console.log("hello ".concat(name, " , ").concat(teacherName));
}
abc("okasha");
//console.log("hello","world","from",""); // rest parameter accept krta hai 
function msg() {
    var para = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        para[_i] = arguments[_i];
    }
    console.log(" ".concat(para));
}
msg("hello", "dara", "from", "world");
// hw overload 
