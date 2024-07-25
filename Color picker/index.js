let input1 = document.getElementById("button1");
let input2 = document.getElementById("button2");
let input3 = document.getElementById("button3");
let input4 = document.getElementById("button4");
let spanEle = document.getElementById("spanEl");
let cardContainer = document.getElementById("cardContainer")


 
function buttonChange1() {
  // document.getElementById("spanEl").innerHTML="#e0e0e0";
cardContainer.style.backgroundColor = "#e0e0e0";
 spanEle.innerHTML= "#e0e0e0";
}
function buttonChange2(){
  // document.getElementById("spanEl").innerHTML="#6fcf97";
    cardContainer.style.backgroundColor = "#6fcf97";
   spanEle.innerHTML = "#6fcf97";
}
function buttonChange3(){
  // document.getElementById("spanEl").innerHTML="#56ccf2";
    cardContainer.style.backgroundColor = "#56ccf2";
    spanEle.innerHTML = "#56ccf2";
}
function buttonChange4(){
  // document.getElementById("spanEl").innerHTML="#bb6bd9";
    cardContainer.style.backgroundColor = "#bb6bd9";
  spanEle.innerHTML = "#bb6bd9";
}