// any : esa data jis ki type na pta hoo 
// never :
// unknown : agr data ki type pat anh hai ye preffer krty hen  jo intentinally nh pta 


// case 1 : "ANY" type casting not allow 
let Value : any ;
Value = 99,
Value = "hello",
Value = true,
Value = undefined


// case 2 "unknown"  better than any 
let val2: unknown; // ap jb tk isy assign nh krskty jb tk iski type pta nachl jaye 
val2 = 99,
val2 = "hello",
val2 = true,
val2 = undefined


// type casting
let val3 : string = Value // any ko hum ny string mn store kia koi error nh aya 
// let val4 :string  = val2 // unknown type string mn store nh hoskti 



/*
function abc():never{
    while(true){
                  condition hamesha true kry gi wo stuck ho jaye ga 
    }
    return 0
}

// function return krta hai void jb return mojod na ho 
// never 
abc() // is point pr function return nh kry ga 

*/
type abc = string & number // jo chez possible na ho aik hi variable nmn aik hi wqt mn dono type ho 