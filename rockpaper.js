

const rock=document.querySelector("#rock")
const paper=document.querySelector("#paper")
const scisor=document.querySelector("#scisor")
const txtpaper = document.querySelector('#txt1')
const txtrock = document.querySelector('#txt3')
const txtscisor = document.querySelector('#txt2')
const compselector = document.querySelector('.compselect')
const result = document.querySelector("#result")
const playerscore = document.querySelector("#playerscore")
const computerscore = document.querySelector("#computerscore")

 
//////////////////////////////////////////////



function papertxt() {

    txtpaper.textContent="You chose:Paper!"
    compselect(2)
     
}



paper.addEventListener('click',papertxt)




function rocktxt() {

    txtrock.textContent = "You chose:Rock!"
    
    compselect(1)
    
    

}

rock.addEventListener('click',rocktxt)

function scisortxt() {

    txtscisor.textContent = "You chose : Scissors!"
    compselect(3)

    
}

scisor.addEventListener('click',scisortxt)

/////////////////////////////////////////////////

    function compselect(choise) {
    
        const ops = ["ROCK","PAPER","SCISSORS"]
        const i = Math.floor(Math.random()*ops.length)
        compselector.textContent= "Computer chose:" + ops[i] +"!"


        //////Gampeplay/////////

        if(choise==1 && ops[i]=="ROCK"){
            
            
            result.textContent = "ITS A DRAW!"

        }

        if(choise==1 && ops[i]=="PAPER"){
            result.textContent = "YOU LOOSE!"


        }

        if(choise==1 && ops[i]=="SCISSORS"){

            result.textContent="YOU WIN!"

            


        }

        
        if(choise==2 && ops[i]=="SCISSORS"){

            result.textContent="YOU LOOSE!"


        }

        if(choise==2 && ops[i]=="PAPER"){

            result.textContent="ITS A DRAW!"


        }

        if(choise==2 && ops[i]=="ROCK"){

            result.textContent="YOU WIN!"


        }


        if( choise == 3 && ops[i]=="SCISSORS"){

                    result.textContent="ITS A DRAW!"

            

        }


        if(choise==3 && ops[i]=="PAPER"){
            result.textContent= "YOU WIN!"
            


        }

        if(choise==3 && ops[i]=="ROCK"){
            
            result.textContent="YOU LOOSE!"

            
        }
        //////////////////////////////////
        //...COLOR RESULT CHANGE
        ////////////////////////////////////
        let x = result.textContent

        if(x=="YOU LOOSE!"){
            document.getElementById("result").style.backgroundColor="red"
        }
        if(x=="YOU WIN!"){
            document.getElementById("result").style.backgroundColor="lightblue"
        }

        else if(x=="ITS A DRAW!"){

            document.getElementById("result").style.backgroundColor="green"

        }
        




        

        
        
        }


            


        
        

           

            


            

            
            
        
        


        


///
   






















  







    


























//const greet = document.querySelector("#greet")
//function names() {
  //  const list =["avi","shimi","moshe","haim"]
    //const i = Math.floor(Math.random()*list.length)
    //greet.textContent= "Hello "+list[i]

    
//}

//document.addEventListener('click',names)





//document.addEventListener('keydown',keys)

//function keys(e) {
  //  console.log(e.keyCode+":");

//}


