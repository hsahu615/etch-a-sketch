
let maincontainer = document.querySelector('.main-container');


function rgb(){
  let n = document.querySelector("#size").value;
  let type = document.getElementById("type");
  let option = type.value;
  if(option=='RGB'){
    RGB(n);
  }
  else if(option=='Grayscale'){
    Grayscale(n);
  }
  else{
    BW(n);
  }
}
function RGB(n){
  for(let i=0;i<n*n;i++){
    let div = document.createElement('div');
    div.setAttribute('class', `checks ${i}`);
    div.style.width = `${(maincontainer.offsetWidth)/n}px`
    div.style.height = `${(maincontainer.offsetHeight)/n}px`
    maincontainer.appendChild(div);  
  }
  let checks = document.querySelectorAll('.checks');
  checks.forEach(box=>box.addEventListener('mouseover', ()=> {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    box.style.background = `rgb(${r}, ${g}, ${b})`;
  }))
}

function Grayscale(n){
  for(let i=0;i<n*n;i++){
    let div = document.createElement('div');
    div.setAttribute('class', `checks ${i}`);
    div.style.width = `${(maincontainer.offsetWidth)/n}px`
    div.style.height = `${(maincontainer.offsetHeight)/n}px`
    maincontainer.appendChild(div);  
  }
  let checks = document.querySelectorAll('.checks');
  checks.forEach(box=>box.addEventListener('mouseover', ()=> {
    let r = Math.floor(Math.random()*255);
    box.style.background = `rgb(${r}, ${r}, ${r})`;
  }))
}

function BW(n){
  for(let i=0;i<n*n;i++){
    let div = document.createElement('div');
    div.setAttribute('class', `checks ${i}`);
    div.style.width = `${(maincontainer.offsetWidth)/n}px`
    div.style.height = `${(maincontainer.offsetHeight)/n}px`
    maincontainer.appendChild(div);  
  }
  let checks = document.querySelectorAll('.checks');
  checks.forEach(box=>box.addEventListener('mouseover', ()=> {
    let blackwhite = ['#000000', '#FFFFFF'];
    let r = blackwhite[Math.floor(Math.random()*10)%2];
    box.style.background = `${r}`;
  }))
}

function cleargrid(){
  let maincontainer = document.querySelector('.main-container');
  maincontainer.innerHTML = '';
}

