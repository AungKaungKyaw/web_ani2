var container = document.querySelector(".rectangle_style");
var zeros = "0000000";
container.addEventListener("click", changeColor , false);
function changeColor(e){
    var color = '#' + Math.floor(Math.random() * 0xFFFFFFFF).toString(16);
    console.log(color);
    var colorLength = color.length;
    if(colorLength < 7){
        color += zeros.substring(0,zeros.length - colorLength);
    }
    container.style.backgroundColor = color;
    container.style.transition = "background-color 1s ease-in";
}



function change_color(e){
        // Your code here
        var color1 = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        var item1 = ".item"+Math.floor(Math.random() * 17).toString();
        document.querySelector(item1).style.backgroundColor = color1;
        document.querySelector(item1).style.transition = "background-color 1.2s ease-in-out";

}
function call_change_color(){
    for(var j=0;j<100;j++){
        setTimeout(change_color,j*500);
    }
}
change_color();
var j=0;
for(var i=0;i<100;i++){
    setTimeout(call_change_color(),i*500);
}




