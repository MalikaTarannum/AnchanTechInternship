

var estatus = document.querySelector(".text")

var btn = document.querySelector("#add")

var check = 0

btn.addEventListener("click",function(){
    if(check == 0) {
        estatus.innerHTML = "Friends"
        estatus.style.color = "green"
        btn.innerHTML = "Remove Friends"
        check = 1
    }
    else {
        estatus.innerHTML = "Stranger"
        estatus.style.color = "red"
        btn.innerHTML = "Add Friends"
        check = 0
    }
})

// var estatus = document.querySelector(".text")

// var btn = document.querySelector("#add")

// var check = 0
// // var removeFriend = document.querySelector("#remove")

// btn.addEventListener("click",function(){
//     if(check == 0) {
//         estatus.innerHTML = "Friends"
//         estatus.style.color = "green"
//         btn.innerHTML = "Remove Friends"
//         check = 1
//     }
//     else {
//         estatus.innerHTML = "Stranger"
//         estatus.style.color = "red"
//         btn.innerHTML = "Add Friends"
//         check = 0
//     }
    
// })
// // removeFriend.addEventListener("click",function(){
// //     estatus.innerHTML = "Stranger"
// //     estatus.style.color = "red"
// // })