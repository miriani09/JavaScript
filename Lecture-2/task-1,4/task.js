function num_ceil(n){
    document.write(Math.ceil(n))
}


function num_floor(n2){
    document.write(Math.floor(n2))
}


function num_round(n3){
    document.write(Math.round(n3))
}


function nums(a, b){
    document.write("Num Round - " + Math.round(a))

    document.write("<br>")

    if(b > 5){
        document.write("Num Ceil - " + Math.round(b))
    }
    else if(b < 5){
        document.write("Num Floor - " + Math.round(b))
    }
}