//EXAMINE WITH DOCUMENT//
// console.dir(document)
// console.log(document.forms)
// console.log(document.title);

const headerTitle=document.getElementById("header-title");
const header=document.getElementById("main-header");
header.style.borderBottom="solid 3px black"
const additem=document.getElementsByClassName("title")
console.log(additem)
additem[0].textContent="ADD ITEMS"
additem[0].style.fontWeight="bold"
additem[0].style.color="green"

