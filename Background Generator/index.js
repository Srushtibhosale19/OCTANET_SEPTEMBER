const getcolor =()=>{
const randomNumber=Math.floor(Math.random()*16777215);
const randomCode="#"+ randomNumber.toString(16);
// console.log(randomCode);
// background color generator
document.body.style.backgroundColor=randomCode;
document.getElementById("color_code").innerText=randomCode ;

// Copy color code
navigator.clipboard.writeText(randomCode)
}

// event call
document.getElementById("btn").addEventListener(
    "click" ,getcolor
)
// Bcakground color every time
getcolor();

