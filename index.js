const listItem = document.getElementById("listItem")
const lineMain = document.getElementById("line-main")
const list = document.getElementsByTagName("li")

 const displayItem = () =>{
  if(listItem.style.display === "none"){
    listItem.style.display = "block";
    listItem.classList.add("fineNavBar")
  }else{
    listItem.style.display = "none"
  }
 }