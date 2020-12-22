// alert('ok')
// document.getElementById('un').addEventListener('click', function(){
//     document.getElementById('un').innerHTML= "Hello"
// })
var x = document.getElementsByClassName('un')[0]
x.addEventListener('click', function(){
    x.innerHTML= "Hello"
    x.nextElementSibling.innerHTML="Bonjour"
    x.parentElement.lastElementChild.innerHTML="100000"
    document.getElementsByTagName('header')[0].style.backgroundColor="pink"
})


var links =Array.from( document.querySelectorAll(".lien"))
var paras = Array.from(document.querySelectorAll("p"))
let color=["red", "green", "blue", "yellow"]

for(let i=0; i<links.length; i++){
    links[i].addEventListener("click", function(){
        paras[i].style.color=color[i]
    })
}

for(let para of paras){
    para.addEventListener("click", function(){
        if(para.style.backgroundColor==="pink"){
            para.style.backgroundColor="white"
        }
        else{
            para.style.backgroundColor="pink"
        }
    })
}

for(let para of paras){
    para.addEventListener("mouseover", function(){
        para.style.fontSize="30px"
    })
}
for(let para of paras){
    para.addEventListener("mouseout", function(){
        para.style.fontSize="18px"
    })
}

