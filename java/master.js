let burger_menue_icon=document.querySelector(".burger_icon");
let burger_menue_menue=document.querySelector(".top_bar .container .burger_menue");
let burger_menue_menue_close=document.querySelector(".top_bar .container .burger_menue .close");
let overlay=document.querySelector(".cover");


burger_menue_icon.onclick=function(){
    burger_menue_menue.classList.add("show")
    overlay.classList.add("overlay")
}
burger_menue_menue_close.onclick=function(){
    burger_menue_menue.classList.remove("show")
    overlay.classList.remove("overlay")
}

