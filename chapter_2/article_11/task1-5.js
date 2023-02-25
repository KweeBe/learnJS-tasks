"use strict"
//2
alert( null || 2 || undefined );

//1 потом 2
alert( alert(1) || 2 || alert(3) );

// null
alert( 1 && null && 2 );

// сначала 1 потом undefined
alert( alert(1) && alert(2) );

//3
alert( null || 2 && 3 || 4 );





