"use strict"
if (-1 || 0) alert( 'first' ); //true выведиться 
if (-1 && 0) alert( 'second' ); //false не выведиться 
if (null || -1 && 1) alert( 'third' ); //true выведиться 
