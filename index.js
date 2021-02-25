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