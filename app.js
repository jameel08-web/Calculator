var input = document.getElementById("input")


function items(value){
    console.log(value)
    input.value += value
}

function calc(){
   var result = eval(input.value);
    input.value = result;
}

function clean(){
    input.value = " ";
}

function dele(){
    input.value = input.value.slice(0,-1)
}