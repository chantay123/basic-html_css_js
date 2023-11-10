"use strict";

   var selectedrow = null;

   function showAlert (message , className){
    const div = document.createElement("div");
    div.className=`alert alert -${className}`;

    div.appendChild(document.createElement(message));
    const container = document.querySelector(".container");
    const main= document.querySelector(".main");
    container.insertBefore()
   }
    


