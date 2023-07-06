// document.getElementsByName("container")
// document.getElementById("container").style.color="red";
// document.getElementById("container").style.backgroundColor="green"

// document.getElementById("text").innerHTML="My name is Mary Apiu I am 23years old"
// document.getElementById("container").childNodes;
// // let child=document.getElementById("container").childNodes
// // console.log({child});
// // let children =document.getElementById("container").children;
// // console.log({children})
// // let p=document.createElement("p");
// // // document.getElementById("container").appendChild(p);
// // p.innerHTML="I am new"
// //  document.getElementsById("container").appendChild(p);
// //  p.setAttribute("class","paragraph");
// let button=document.getElementById("button");
// button.addEventListener("click,",function(){
//     button.innerHTML="Clicked !!";
//     button.style.backgroundColor="green"
//     button.style.padding="10px";
//     button.style.borderRadius="5px";
//     button.style.border="none";
// })

 document.getElementsByClassName("container")
document.getElementById("container").style.color = "red";
document.getElementById("container").style.backgroundColor = "#E2E2E2";
document.getElementById("text").innerHTML = "My name is Mary  and I am 23 years old";
let child = document.getElementById("container").childNodes;
console.log({child});
let children = document.getElementById("container").children;
console.log({children});
let p = document.createElement("p");
p.innerHTML = "I am new"
 document.getElementById("container").appendChild(p);
 p.setAttribute("class", "paragraph");
 p.setAttribute("id", "paragraph");
 document.getElementById("paragraph").style.color = "green";
 let button = document.getElementById("button");
 button.addEventListener("click",  function(){
    button.innerHTML = 'Clicked!!';
    button.style.backgroundColor = '#19BA96';
    button.style.padding = '10px';
    button.style.borderRadius = '5px';
    button.style.border = 'none';
 })