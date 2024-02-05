let menu_open=document.getElementById("menu_open");
let menu_close=document.getElementById("menu_close");
let menu_s=document.getElementById("menu_s");
let navbar=document.getElementById("navbar");
menu_open.addEventListener("click",function(){
    menu_s.style.display="flex";
    menu_s.style.flexDirection="column";
    menu_open.style.display="none";
    navbar.style.alignItems="start";
    
});

menu_close.addEventListener("click",function(){
    menu_s.style.display="none";
    menu_open.style.display="block";
    navbar.style.alignItems="center";
});