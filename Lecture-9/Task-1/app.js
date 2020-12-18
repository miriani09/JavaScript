move = 0
move1 = 0
function moving_box(){

    document.getElementById("down").addEventListener("click", function(){
        if(move <= 296){
            move += 20
        }
        document.getElementById("box").style.top = move + "px"
    })

    document.getElementById("up").addEventListener("click", function(){
        if(move <= 300 && move >0){
            move -= 20
        }
        document.getElementById("box").style.top = move + "px"
    })

    document.getElementById("left").addEventListener("click", function(){
        if(move1 <= 800 && move1 >= 4){
            move1 -= 20
        }
        document.getElementById("box").style.left = move1 + "px"
    })

    document.getElementById("right").addEventListener("click", function(){
        if(move1 <= 696 && move1 >= 0){
            move1 += 20
        }
        document.getElementById("box").style.left = move1 + "px"
    })

    document.getElementById("down_left").addEventListener("click", function(){
        if(move <= 296){
            move += 20
        }
        document.getElementById("box").style.top = move + "px"
        if(move1 <= 800 && move1 >= 4){
            move1 -= 20
        }
        document.getElementById("box").style.left = move1 + "px"
    })

    document.getElementById("down_right").addEventListener("click", function(){
        if(move <= 296){
            move += 20
        }
        document.getElementById("box").style.top = move + "px"
        if(move1 <= 696 && move1 >= 0){
            move1 += 20
        }
        document.getElementById("box").style.left = move1 + "px"
    })

    document.getElementById("up_left").addEventListener("click", function(){
        if(move <= 300 && move >0){
            move -= 20
        }
        document.getElementById("box").style.top = move + "px"
        if(move1 <= 800 && move1 >= 4){
            move1 -= 20
        }
        document.getElementById("box").style.left = move1 + "px"
    })
    document.getElementById("up_right").addEventListener("click", function(){
        if(move <= 300 && move >0){
            move -= 20
        }
        document.getElementById("box").style.top = move + "px"
        if(move1 <= 696 && move1 >= 0){
            move1 += 20
        }
        document.getElementById("box").style.left = move1 + "px"
    })
}

moving_box()