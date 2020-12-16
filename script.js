document.getElementsByClassName('un')[0].addEventListener('click', function(){
    document.getElementsByClassName('un')[0].innerText= 10000
})

// let un = document.querySelector('.un')
// un.addEventListener('click', function(){
//     un.innerHTML="Hello"
//     un.nextElementSibling.innerHTML="bonjour"
//     // un.nextElementSibling.nextElementSibling.style.textDecoration="underline"
//     un.parentElement.lastElementChild.style.textDecoration="underline"
// })
// let un = document.querySelector('#un')
// un.addEventListener('click', function(){
// })

// let par=document.querySelector('.my-par')
// document.getElementById('home').addEventListener("click", function(){
//     // if(par.style.display==="none"){
//     //     par.style.display="block"
//     // }
//     // else{

//         par.style.color="white"
//         par.style.backgroundColor="white"

//     // }
// })

// let par=document.querySelector('.my-par')
// document.getElementById('contact').addEventListener("click", function(){
//     // if(par.style.display==="none"){
//     //     par.style.display="block"
//     // }
//     // else{

//         par.style.color="black"
//         par.style.backgroundColor="pink"
//     // }
// })


let links= Array.from(document.getElementsByClassName("lien"))
console.log(links)
let paras= Array.from(document.getElementsByTagName("p"))
console.log(paras)

for(let i=0; i<links.length; i++){
    links[i].addEventListener("mouseover", function(){
        paras[i].style.backgroundColor="pink"
    })
    links[i].addEventListener("mouseout", function(){
        paras[i].style.backgroundColor="white"
    })
}