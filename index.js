// let maintainence=()=>{
//     alert("still working on it")

// }
let cart = {};
let cartadd = (temp) => {
  if(!cart.hasOwnProperty(temp)){
    cart[temp] = 1;
  }
  else{
    cart[temp] += 1;
  }
}

let cartItem = (temp,temp2) => {
    return `
    <div class="citem">
    <h5><u>${temp}:</u> <i>${temp2}</i></h5> 
    <p>${temp2*150}Rs</p>
    <div>
    `
}

let clearCart = () => {
  document.querySelector('.cartb').innerHTML = "";
  document.querySelector('.cartb').innerHTML += `<div class="tot"><p><span class="lower">Your Total Amount Is:</span> <span class="higher">Rs0</p></span></div>`;
  for(let i in cart){
    delete cart[i];
  }
}

let showCart = () => {
  document.querySelector('.cartb').innerHTML = "";
  let total = 0;
  for(let i in cart){
    document.querySelector('.cartb').innerHTML += cartItem(i,cart[i]);
    total += cart[i]*150;
  }
  console.log(total);
  document.querySelector('.cartb').innerHTML += `<div class="tot"><p><span class="lower">Your Total Amount Is:</span> <span class="higher">Rs${total}</p></span></div>`
  document.querySelector(".cartbox").style.display = "flex";
}

let temp = document.getElementsByClassName("mycard")
 console.log(temp)
 let maintainence1=()=>
 {
  for(const i of temp){
    i.style.display = "flex"

  }
  
 }

 let maintainence2=()=>
 {
  for(const i of temp){
  if(i.classList.contains("cake")){
    i.style.display = "flex"
  

  }
  else{
    i.style.display = "none"
  }
  
 }
 }
 let maintainence3=()=>
 {
  for(const i of temp){
  if(i.classList.contains("cupcake")){
    i.style.display = "flex"
  

  }
  else{
    i.style.display = "none"
  }
  
}}
let maintainence4=()=>
 {
  for(const i of temp){
  if(i.classList.contains("sweets")){
    i.style.display = "flex"
  

  }
  else{
    i.style.display = "none"
  }
  
 }}
 let maintainence5=()=>
 {
  for(const i of temp){
  if(i.classList.contains("doughnut")){
    i.style.display = "flex"
  

  }
  else{
    i.style.display = "none"
  }
  
 }}

