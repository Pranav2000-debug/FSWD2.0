{
    console.log(a); /* Refrence Error. Not Hoisted */  
    console.log(b); /* Refrence Error. Not Hoisted */
    console.log(c); /* Undefined. Hoisted */

    let a = 'let variable';
    const b = 'const variable';
    var c = 'var variable';

    console.log(a);  
    console.log(b); 
    console.log(c); 
}