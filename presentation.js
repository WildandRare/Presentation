var slide_number = 1;
function nextSlide(){
    slide_number+=1;
}
function previousSlide(){
    slide_number-=1;
}
setInterval(function(){
    if(slide_number==1){
        document.getElementById("slideimage").src = "slides/slideoneJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==2){
        document.getElementById("slideimage").src = "slides/slidetwoJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==3){
        document.getElementById("slideimage").src = "slides/slidethreeJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==4){
        document.getElementById("slideimage").src = "slides/slidefourJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==5){
        document.getElementById("slideimage").src = "slides/slidefiveJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==6){
        document.getElementById("slideimage").src = "slides/slidesixJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==7){
        document.getElementById("slideimage").src = "slides/slidesevenJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==8){
        document.getElementById("slideimage").src = "slides/slideeightJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==9){
        document.getElementById("slideimage").src = "slides/slidenineJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==10){
        document.getElementById("slideimage").src = "slides/slidetenJSIMS!!!OYHI!!!!!!!!!.png"
    }
    if(slide_number==11){
        document.getElementById("slideimage").src = "slides/slideelevenJSIMS!!!OYHI!!!!!!!!!.png"
    }
}, 3)