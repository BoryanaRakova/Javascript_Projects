//assignment #40

function my_function(){
    if (new Date().getHours() < 12) {
        document.getElementById("try").innerHTML = "It is morning!";
    }
    if (new Date().getHours() >= 12) {
        document.getElementById("try").innerHTML = "It is not morning!";
    }
}

