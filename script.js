
let header = document.getElementById('header')
let passwordLength 

function getPassword(){

    getPassword1()
    getPassword2()
    getPassword3()
    getPassword4()
}

function getPassword1(){
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    passwordLength = document.getElementById('slider').value
    let password = ""

    for (let i=0; i<passwordLength; i++){
    password += chars[Math.floor(Math.random() * Math.floor(chars.length-1)) ]
    document.getElementById("pass1").textContent = password
    }
}

function getPassword2(){
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    passwordLength = document.getElementById('slider').value
    let password = ""

    for (let i=0; i<passwordLength; i++){     
    password += chars[Math.floor(Math.random() * Math.floor(chars.length-1)) ]    
    document.getElementById("pass2").textContent = password
    }
}

function getPassword3(){
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    passwordLength = document.getElementById('slider').value
    let password = ""

    for (let i=0; i<passwordLength; i++){
     
    password += chars[Math.floor(Math.random() * Math.floor(chars.length-1)) ]
    document.getElementById("pass3").textContent = password
    }
}

function getPassword4(){
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    passwordLength = document.getElementById('slider').value
    let password = ""

    for (let i=0; i<passwordLength; i++){
    password += chars[Math.floor(Math.random() * Math.floor(chars.length - 1)) ]
    document.getElementById("pass4").textContent = password
    }
}


// Setting Password Length

// document.getElementById('length').innerHTML = "Length: 1 "


let sliderEl = document.getElementById('slider').value

document.getElementById('length').textContent ="Dlugosc: " +  sliderEl






document.getElementById('slider').oninput = function(){

    let sliderEl = document.getElementById('slider').value 

    if(sliderEl > 0){
        document.getElementById('length').innerHTML = "Dlugosc: " + sliderEl
    } else {
        document.getElementById('length').innerHTML = "Dlugosc: 1"
    }

}

// change font size accordingly to password size 

// function changeSize(){
//     if
// }