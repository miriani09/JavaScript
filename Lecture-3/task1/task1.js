function len(){
    str = "Hello World!"
    document.write("Hello World length are - ",str.length,"<hr>")
}


function symb(){
    str = "JavaScript"
    document.write(str.match(/a/g).length,"<hr>")
}


function substring(){
    str = "JavaScript, Html and Css"
    s = str.substr(10,15)
    document.write(s,"<br>")
    document.write("Substring symbol - ",s.length,"<hr>")
}

function chr(){
    str = "JavaScript"
    document.write(str,"<br>")
    document.write(str.charCodeAt(),"<hr>")
}

function rand(length) {
    result           = '';
    characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    charactersLength = characters.length;
    for (i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.write(result,"<hr>")
 }

 function rand20(length) {
    result           = '';
    characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    charactersLength = characters.length;
    for (i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))+" ";
    }
    document.write(result,"<hr>")
 }


 function string1(){
    array = ["JavaScript","Html","Css"]

    document.write(array.includes("JavaScript"), "<hr>")
}



function delsymbol(){
    str1 = "AABBCCDDEEFF"
    document.write(str1.replace(/(.)(?=.*\1)/g, ""))
    
}


