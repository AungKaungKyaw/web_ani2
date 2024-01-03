function change_color() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var item = ".item" + Math.floor(Math.random() * 17).toString();

    console.log(color + "__" + item);

    document.querySelector(item).style.backgroundColor = color;
    document.querySelector(item).style.transition = "background-color 3s ease-in-out";
}
for(var j=0;j<100;j++){
    setTimeout(function (){call_change()},1000);
}
function call_change(){
    for(var i=0;i<100;i++){
        setTimeout(function (){change_color()},i*2500);
    }
}



