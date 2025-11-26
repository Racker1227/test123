console.log("Hey! Good Eevening!");

i =101;
console.log(i);

i=102;
console.log(i);

 let j = 50;    // let is block scoped variable
{
  // let j = 60;  // this j is different from outer j
}
{
    console.log(j);
}

{
    
var k = 200;  // var is gloabal variable
}

{
    console.log(k);
}


{
    const p = 3; // const is block scoped variable
}

{
    console.log(p);
}