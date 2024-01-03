function change_color() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var item = ".item" + Math.floor(Math.random() * 17).toString();

    console.log(color + "__" + item);

    document.querySelector(item).style.backgroundColor = color;
    document.querySelector(item).style.transition = "background-color 1.2s ease-in-out";
}

function call_change_color() {
    for (var j = 0; j < 100; j++) {
        setTimeout(change_color, j * 500);
    }
}

// Call change_color once outside the loop
change_color();

// Use a single setTimeout call for call_change_color
setTimeout(function() {
    for (var i = 0; i < 100; i++) {
        call_change_color();
        console.log("i value is : " + i);
    }
}, 500 * 100); // Set the timeout for the total duration of the loop
