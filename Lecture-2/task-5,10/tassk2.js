function rand1(){
    document.write("0-დან 1-მდე შუალედი - " , Math.random())
}


function rand2(){
    document.write("5-დან 50-მდე შუალედი - " , Math.floor(Math.random()*46)+5)
}

function rand3(a, b){
    r = b-a+1
    document.write("a-დან b-მდე შუალედი - " , Math.floor(Math.random()*r)+a)
}

function rand4(a, b){
    arr = []
    for (i = 0; i <= 10; i++){
        arr.push(Math.round(Math.random()*(b-a)+a))
    }
    document.write("10 შემთხვევითი რიცხვი - ", arr);
}

function rand5(a, b){
    r = Math.round(Math.random() * (b-a) + a);
    document.write("შემთხვევითი რიცხვი - ", r);
}