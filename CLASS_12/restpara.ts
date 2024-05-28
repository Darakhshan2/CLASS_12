// rest parameters 
// ye arguments accept krta hia unlimited parameter aik hi hota hai  
// rest para hamesha last mn banaty hen 
// rest parameter ki type array  
// 
function abc(name:string, ...teacherName:string[]){// atleast jo normal para hai wo zaroori dena hai 
        console.log(`hello ${name} , ${teacherName}`);       
}
abc("okasha")

//console.log("hello","world","from",""); // rest parameter accept krta hai 

function msg(... para:string[]){
    console.log(` ${para}`)
}

msg("hello","dara","from","world")

// hw overload 
// function structure defined krky rkh lo 
// given structure mn sy kesi aik ko bh match krna zaroori hai 

function hello(message:string , name:string):string // indono mn sy aik zaroori match krey 
function hello(message:number):number 
function hello(message:any , name:any){ // parameter ki type always any rkhty hne 
    return message
}
// hello(true) dono overload mn sy koi aik follow kro 