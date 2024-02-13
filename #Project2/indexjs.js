'use strict';
const model_1=document.querySelector(".model-1");
const overlay_1=document.querySelector(".overlay-1");
const btnInside_1=document.querySelector(".escape-1");
const btn1=document.querySelector(".btn-1");
const close_1=function(){
    model_1.classList.add("hidden");
    overlay_1.classList.add("hidden");
}
const open_1=function(){
    model_1.classList.remove("hidden");
    overlay_1.classList.remove("hidden");   
}
btn1.addEventListener("click",open_1);
btnInside_1.addEventListener("click",close_1);
overlay_1.addEventListener("click",close_1);


const model_2=document.querySelector(".model-2");
const overlay_2=document.querySelector(".overlay-2");
const btnInside_2=document.querySelector(".escape-2");
const btn2=document.querySelector(".btn-2");
const close_2=function(){
    model_2.classList.add("hidden");
    overlay_2.classList.add("hidden");
};
const open_2=function(){
    model_2.classList.remove("hidden");
    overlay_2.classList.remove("hidden");   
};
btn2.addEventListener("click",open_2);
btnInside_2.addEventListener("click",close_2);
overlay_2.addEventListener("click",close_2);



const model_3=document.querySelector(".model-3");
const overlay_3=document.querySelector(".overlay-3");
const btnInside_3=document.querySelector(".escape-3");
const btn3=document.querySelector(".btn-3");
const close_3=function(){
    model_3.classList.add("hidden");
    overlay_3.classList.add("hidden");
};
const open_3=function(){
    model_3.classList.remove("hidden");
    overlay_3.classList.remove("hidden");
};
btn3.addEventListener("click",open_3);
btnInside_3.addEventListener("click",close_3);
overlay_3.addEventListener("click",close_3);



const model_4=document.querySelector(".model-4");
const overlay_4=document.querySelector(".overlay-4");
const btnIndside_4=document.querySelector(".escape-4");
const btn4=document.querySelector(".btn-4");
const open_4=function(){
    model_4.classList.remove("hidden");
    overlay_4.classList.remove("hidden");
}
const close_4=function(){
    model_4.classList.add("hidden");
    overlay_4.classList.add("hidden");
}
btn4.addEventListener("click",open_4);
btnIndside_4.addEventListener("click",close_4);
overlay_4.addEventListener("click",close_4);



const model_5=document.querySelector(".model-5");
const overlay_5=document.querySelector(".overlay-5");
const btnIndside_5=document.querySelector(".escape-5");
const btn5=document.querySelector(".btn-5");
const open_5=function(){
    model_5.classList.remove("hidden");
    overlay_5.classList.remove("hidden");
}
const close_5=function(){
    model_5.classList.add("hidden");
    overlay_5.classList.add("hidden");
}
btn5.addEventListener("click",open_5);
btnIndside_5.addEventListener("click",close_5);
overlay_5.addEventListener("click",close_5);



const model_6=document.querySelector(".model-6");
const overlay_6=document.querySelector(".overlay-6");
const btnIndside_6=document.querySelector(".escape-6");
const btn6=document.querySelector(".btn-6");
const open_6=function(){
    model_6.classList.remove("hidden");
    overlay_6.classList.remove("hidden");
}
const close_6=function(){
    model_6.classList.add("hidden");
    overlay_6.classList.add("hidden");
}
btn6.addEventListener("click",open_6);
btnIndside_6.addEventListener("click",close_6);
overlay_6.addEventListener("click",close_6);



const model_7=document.querySelector(".model-7");
const overlay_7=document.querySelector(".overlay-7");
const btnIndside_7=document.querySelector(".escape-7");
const btn7=document.querySelector(".btn-7");
const open_7=function(){
    model_7.classList.remove("hidden");
    overlay_7.classList.remove("hidden");
}
const close_7=function(){
    model_7.classList.add("hidden");
    overlay_7.classList.add("hidden");
}
btn7.addEventListener("click",open_7);
btnIndside_7.addEventListener("click",close_7);
overlay_7.addEventListener("click",close_7);



const model_8=document.querySelector(".model-8");
const overlay_8=document.querySelector(".overlay-8");
const btnIndside_8=document.querySelector(".escape-8");
const btn8=document.querySelector(".btn-8");
const open_8=function(){
    model_8.classList.remove("hidden");
    overlay_8.classList.remove("hidden");
}
const close_8=function(){
    model_8.classList.add("hidden");
    overlay_8.classList.add("hidden");
}
btn8.addEventListener("click",open_8);
btnIndside_8.addEventListener("click",close_8);
overlay_8.addEventListener("click",close_8);


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_1.classList.add("hidden");
        overlay_1.classList.add("hidden");
    }
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_2.classList.add("hidden");
        overlay_2.classList.add("hidden");
    }
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_3.classList.add("hidden");
        overlay_3.classList.add("hidden");
    }
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_4.classList.add("hidden");
        overlay_4.classList.add("hidden");
    }
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_5.classList.add("hidden");
        overlay_5.classList.add("hidden");
    }
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_6.classList.add("hidden");
        overlay_6.classList.add("hidden");
    }
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_7.classList.add("hidden");
        overlay_7.classList.add("hidden");
    }
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        model_8.classList.add("hidden");
        overlay_8.classList.add("hidden");
    }
});

document.addEventListener("keydown",function(e){
    console.log(e.key);
});