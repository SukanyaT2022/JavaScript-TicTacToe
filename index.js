var turn = 0;
function gamePlay(id){
    var td = document.getElementById(id)
    if (turn==0&& td.hasChildNodes()==false){
        var img = document.createElement('img')
        img.setAttribute('src','henry.jpg')//
        img.setAttribute('height','120px')
        img.setAttribute('width','120px')
        td.appendChild(img)
     if (winner(img)==true){
alert('Henry wins !')
     }
        
        if (draw()==true){
            alert ("The game is a draw")
        }
        turn = 1

    }
    else if(turn == 1&& td.hasChildNodes()==false){
        var img = document.createElement('img')
        img.setAttribute('src','logan.jpg')
        img.setAttribute('height','120px')
        img.setAttribute('width','120px')
        td.appendChild(img)

        if (winner(img)==true){
            alert('Logan wins !')
                 }

        if (draw()==true){
            alert ("The game is a draw")
        }

        turn = 0

    }
}


//draw function - we check every cell--noone win
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