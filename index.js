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

