

function initialize(){
    d1 = document.getElementById("num1");
    d2 = document.getElementById("num2");
    final = document.getElementById("Result");

    var1 = 0;
    var2 = 0;
}

function randomize(i){
    let random = Math.ceil(Math.random() * 6)
    if(i == 1) var1 = random;
    else var2 = random;
    display();
}

function add(){
    result = var1 + var2;
    display();
}

function display(){
    d1.innerHTML = var1;
    d2.innerHTML = var2;
    final.innerHTML = result;
}