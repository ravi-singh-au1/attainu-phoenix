
var background = document.getElementById('body');
background.style.backgroundColor = 'yellow';
var interval;
var changeColor = function () {

    if (background.style.backgroundColor == 'red') {
        console.log("First conditioin")
        background.style.backgroundColor = 'green'
    }
    else{
        background.style.backgroundColor = 'red'
    }

}
interval = setInterval(changeColor, 5000);

var goFast = document.getElementById('go');
goFast.addEventListener("click", function () {
    clearInterval(interval)
    interval = setInterval(changeColor, 2000);
})

var goSlow = document.getElementById('slow');
goSlow.addEventListener("click", function () {
    clearInterval(interval)
    interval=setInterval(changeColor, 6000);
})
