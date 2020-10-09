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
    arr = [];
    while(arr.length < 10){
    r = Math.floor(Math.random() * b-a+1) + a;
    if(arr.indexOf(r) == -1) arr.push(r);
    }
    document.write("10 შემთხვევითი რიცხვი - ", arr);
}