//function parameters
// case 1

function greeting(name:string){// parameter
    console.log(`Assalam o alaikum ${name}`);
}
greeting("darakhshan")// argument  yahan pr lazmi dena hoga wrna error


// case 2
// default parameter

function greet(name:string = "user"){//agr user argumennnt spass nh krta to user as a default use krlen gy 
    console.log(`hello ${name}`);
    
}

greet() // agr ye kren gy to hamari default set ki hui value print hogi

// parameter as a variable behave krta hia 
// obtional  parameter topics 

// obtinal banany ky liye name ky foran bad ? lagaty hen 

function welcome(name ? :string){
     console.log(`hello ${name}`);
}
welcome()

// agr para nh den gy to uski jaga undefined 

// default parameters are also opitional but we set default value`