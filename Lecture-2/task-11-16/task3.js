function day(){
    d = Math.floor(Math.random()*7)
    if(d == 0){
        document.write("Sunday")
    }
    else if(d == 1){
        document.write("Monday")
    }
    else if(d == 2){
        document.write("Tuesday")
    }
    else if(d == 3){
        document.write("Wednasday")
    }
    else if(d == 4){
        document.write("Thursday")
    }
    else if(d == 5){
        document.write("Friday")
    }
    else if(d == 6){
        document.write("Saturday")
    }
}

function pic() {

    randomImage = new Array(); 
    randomImage[0] = "pic1.jpg"; 
    randomImage[1] = "pic2.jpg"; 
    randomImage[2] = "pic3.jpg";
    randomImage[3] = "pic4.jpg";
    randomImage[4] = "pic5.jpg";
    randomImage[5] = "pic6.jpg";
    randomImage[6] = "pic7.jpg";
    randomImage[7] = "pic8.jpg";
    randomImage[8] = "pic9.jpg";
    randomImage[9] = "pic10.jpg";
    
    number = Math.floor(Math.random()*randomImage.length);
    document.write('<img src="'+randomImage[number]+'" />');
}

function rand4pic(){
    randomImage = new Array(); 
    randomImage[0] = "pic1.jpg"; 
    randomImage[1] = "pic2.jpg"; 
    randomImage[2] = "pic3.jpg";
    randomImage[3] = "pic4.jpg";
    randomImage[4] = "pic5.jpg";
    randomImage[5] = "pic6.jpg";
    randomImage[6] = "pic7.jpg";
    randomImage[7] = "pic8.jpg";
    randomImage[8] = "pic9.jpg";
    randomImage[9] = "pic10.jpg";

    number = Math.floor(Math.random()*randomImage.length);
    document.write('<img src="'+randomImage[number]+'" />');
    number = Math.floor(Math.random()*randomImage.length);
    document.write('<img src="'+randomImage[number]+'" />');
    number = Math.floor(Math.random()*randomImage.length);
    document.write('<img src="'+randomImage[number]+'" />');
    number = Math.floor(Math.random()*randomImage.length);
    document.write('<img src="'+randomImage[number]+'" />');
}


function month(){
    d = new Date()
    a = 1
    b = 31
    r = Math.round(Math.random()*(b-a)+a)
    document.write(r)
}

