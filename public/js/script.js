

let mobile = document.getElementById('mobile')
let laptop = document.getElementById('laptop')
let tv = document.getElementById('tv')
let refrigerator = document.getElementById('refrigerator')
let others = document.getElementById('others-category')
let others_input= document.getElementById('others')
let submit = document.getElementById('submit');


mobile.addEventListener('click',()=>{
  localStorage.setItem('category','mobiles')
})
laptop.addEventListener('click',()=>{
  localStorage.setItem('category','laptops')
})
tv.addEventListener('click',()=>{
  localStorage.setItem('category','tv')
})
refrigerator.addEventListener('click',()=>{
  localStorage.setItem('category','refrigerator')
})
others.addEventListener('click',()=>{
  
  others_input.click();
})
submit.addEventListener('click',()=>{
  localStorage.setItem('category',others_input.value)
})
others_input.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
      submit.click();
  }
})