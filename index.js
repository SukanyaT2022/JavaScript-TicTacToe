var win = 0
var turn = 0;
var playerOne = '';
var playerTwo = '';
function gamePlay(id){
    //td represent by td each box
    var td = document.getElementById(id)
    //hasChildnode is function to check true or false
    if (turn==0 && win==0 && td.hasChildNodes()==false){
        var img = document.createElement('img')
        img.setAttribute('src',playerOne)//
        img.setAttribute('height','120px')
        img.setAttribute('width','120px')
        td.appendChild(img)// we put image inside td tag
        // appendchild will add pic inside td tag
     if (winner(img)==true){
alert('Henry wins !')
win = 1
     }
        if (win==0 && draw()==true){
            alert ("No one wins the game.")
        }
        turn = 1

    }
    else if(turn == 1&& win==0 && td.hasChildNodes()==false){
        var img = document.createElement('img')
        img.setAttribute('src',playerTwo)
        img.setAttribute('height','120px')
        img.setAttribute('width','120px')
        td.appendChild(img)

        if (winner(img)==true){
            alert('Logan wins !')
            win = 1
                 }
//no one win and no box to fill--if draw return it mean no one win
        if (win==0 && draw()==true){
            alert ("No one wins the game.")
        }

        turn = 0

    }
    // if (td.firstChild==null && win==0) 
    // td.appendChild(img)
    
    // if (winner(img)==true){
    //     alert('Henry wins !')
    //          }
                
    //             if (draw()==true){
    //                 alert ("The game is a draw")
    //             }
    //             if (turn==0){
    //                 turn = 1
    //             }else 
    //             turn = 0
}


//draw function - we check every cell--noone win
//first check every cell are blank or nor not or empty
//function draw if no empty box left to play -= no one win
function draw(){
    for (i=0; i<=8; i++){
        var id = ''+ i //this line convert id to number
        if(document.getElementById(id).hasChildNodes())
        continue
        //.hasChildnode is image check image fill the box
         else{
            return false
            //if false all box not fill yet
        }
    }
   return true
   //if true means all boxes are filled --not conitnue the game

}
//conitnue 

//function winner

function winner(img){
  
    // first row
    //check if all 3 boxes are filled in the first row position 0,1,2 
    if (document.getElementById('0').hasChildNodes()&&document.getElementById('1').hasChildNodes()&& document.getElementById('2').hasChildNodes()){
        //second if check if all 3 in the first row have the same images
        // firstchild is inside td which is image tag
if (document.getElementById('0').firstChild.src==img.src&& document.getElementById('1').firstChild.src==img.src&&document.getElementById('2').firstChild.src==img.src){
    return true
}
    }
//line 62 to 79 check row
    // next second row 
    if (document.getElementById('3').hasChildNodes()&&document.getElementById('4').hasChildNodes()&& document.getElementById('5').hasChildNodes()){
        //second if check if all 3 in the first row have the same images
        // firstchild is inside td which is image tag
if (document.getElementById('3').firstChild.src==img.src&& document.getElementById('4').firstChild.src==img.src&&document.getElementById('5').firstChild.src==img.src){
    return true
}
    }

 // next thirs row 
 if (document.getElementById('6').hasChildNodes()&&document.getElementById('7').hasChildNodes()&& document.getElementById('8').hasChildNodes()){
    //second if check if all 3 in the first row have the same images
    // firstchild is inside td which is image tag
if (document.getElementById('6').firstChild.src==img.src&& document.getElementById('7').firstChild.src==img.src&&document.getElementById('8').firstChild.src==img.src){
return true
}
}


//check column 

 // first column
 if (document.getElementById('0').hasChildNodes()&&document.getElementById('3').hasChildNodes()&& document.getElementById('6').hasChildNodes()){
    //second if check if all 3 in the first row have the same images
    // firstchild is inside td which is image tag
if (document.getElementById('0').firstChild.src==img.src&& document.getElementById('3').firstChild.src==img.src&&document.getElementById('6').firstChild.src==img.src){
return true
}
}


// second column
if (document.getElementById('1').hasChildNodes()&&document.getElementById('4').hasChildNodes()&& document.getElementById('7').hasChildNodes()){
    //second if check if all 3 in the first row have the same images
    // firstchild is inside td which is image tag
if (document.getElementById('1').firstChild.src==img.src&& document.getElementById('4').firstChild.src==img.src&&document.getElementById('7').firstChild.src==img.src){
return true
}
}

// second column
if (document.getElementById('2').hasChildNodes()&&document.getElementById('5').hasChildNodes()&& document.getElementById('8').hasChildNodes()){
    //second if check if all 3 in the first row have the same images
    // firstchild is inside td which is image tag
if (document.getElementById('2').firstChild.src==img.src&& document.getElementById('5').firstChild.src==img.src&&document.getElementById('8').firstChild.src==img.src){
return true
}
}


// for cross
if (document.getElementById('0').hasChildNodes()&&document.getElementById('4').hasChildNodes()&& document.getElementById('8').hasChildNodes()){
    //second if check if all 3 in the first row have the same images
    // firstchild is inside td which is image tag
if (document.getElementById('0').firstChild.src==img.src&& document.getElementById('4').firstChild.src==img.src&&document.getElementById('8').firstChild.src==img.src){
return true
}
}

// another cross
if (document.getElementById('2').hasChildNodes()&&document.getElementById('4').hasChildNodes()&& document.getElementById('6').hasChildNodes()){
    //second if check if all 3 in the first row have the same images
    // firstchild is inside td which is image tag
if (document.getElementById('2').firstChild.src==img.src&& document.getElementById('4').firstChild.src==img.src&&document.getElementById('6').firstChild.src==img.src){
return true
}
}


return false

}
function startGame(){
    for (i=0; i<=8; i++){
        var id = ''+ i
        if (document.getElementById(id).hasChildNodes())
        document.getElementById(id).removeChild(document.getElementById(id).firstChild)}
        turn = 0
        win = 0
        //below work on player
        var optionOne = document.formOne.playerOne.value
        var optionTwo = document.formOne.playerTwo.value
        //option one
        if (optionOne=="Henry"){
            playerOne = "henryPNG.png"
        }else if(optionOne == "Logan") {
            playerOne = "loganPNG.png"
        }else if(optionOne == "Dinosaur") {
            playerOne = "https://images.unsplash.com/photo-1583867195148-e869329c07b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlub3NhdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" }
            else if(optionOne == "Bird") {
                playerOne = "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"  }
                else{
                    playerOne = "henryPNG.png" 
                }

                // option two 

                if (optionTwo=="Henry"){
                    playerTwo = "henryPNG.png"
                }else if(optionTwo == "Logan") {
                    playerTwo = "loganPNG.png"
                }else if(optionTwo == "Dinosaur") {
                    playerTwo = "https://images.unsplash.com/photo-1583867195148-e869329c07b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlub3NhdXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" }
                    else if(optionTwo == "Bird") {
                        playerTwo = "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"  }
                        else{
                            playerTwo = "loganPNG.png"
                        }
    }
