for(var i=0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var innerhtml=this.innerHTML;
        makeSound(innerhtml);
        buttonAnimation(innerhtml);
        
    });
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
switch (key) {
    case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

    default:
        break;
}
}
function buttonAnimation(currkey){
    var act=document.querySelector("." + currkey);
    act.classList.add("pressed");
    setTimeout(function(){
        act.classList.remove("pressed")
    }, 100);
}







// var audio=new Audio("sounds/tom-1.mp3");
//         audio.play();