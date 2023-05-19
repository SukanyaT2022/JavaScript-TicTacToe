var turn = 0;
function gamePlay(id){
    var td = document.getElementById(id)
    if (turn==0&& td.hasChildNodes()==false){
        var img = document.createElement('img')
        img.setAttribute('src','pic2.jpg')
        img.setAttribute('height','100px')
        img.setAttribute('width','100px')
        td.appendChild(img)
        if (draw()==true){
            alert ("The game is a draw")
        }
        turn = 1

    }
    else if(turn == 1&& td.hasChildNodes()==false){
        var img = document.createElement('img')
        img.setAttribute('src','pic1.png')
        img.setAttribute('height','100px')
        img.setAttribute('width','100px')
        td.appendChild(img)
        if (draw()==true){
            alert ("The game is a draw")
        }

        turn = 0




    }
}


//draw function - we check every cell
//first check every cell are blank or nor not or empty
function draw(){
    for (i=0; i<=8; i++){
        var id = ''+ i
        if(document.getElementById(id).hasChildNodes())
        continue
         else{
            return false
        }
    }
   return true

}