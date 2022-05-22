 const params = ["Batu", "Kertas", "Gunting"];
    var playnow = false;
    function suit (pilihan){
        console.log(pilihan);
       if (playnow) {
           return;
       }
        playnow=true
        document.getElementById(`${params[pilihan]}`).style.backgroundColor='grey';
        
        const com = choice();
        const vs = document.querySelector("#VS")

        console.log({pilihan, com})

        if(pilihan === 0){
            if(com === 0){
                console.log("draw"), document.getElementById("VS").innerHTML='Draw', vs.style.backgroundColor = "#035B0C" 
    
            }else if (com === 1){
                console.log("kalah"),document.getElementById("VS").innerHTML='PLAYER 1 LOOSE',vs.style.backgroundColor = "#035B0C" 
            } else if (com === 2){
                console.log("menang"),document.getElementById("VS").innerHTML='PLAYER 1 WIN',vs.style.backgroundColor = "#035B0C" 
            }
        }

        if(pilihan === 1){
            if(com === 1)
            {
                console.log("draw"), document.getElementById("VS").innerHTML='Draw',vs.style.backgroundColor = "#035B0C" 
            } else if (com === 0){
                console.log("menang"), document.getElementById("VS").innerHTML='PLAYER 1 WIN',vs.style.backgroundColor = "#035B0C" 
            } else if (com === 2){
                console.log("kalah"), document.getElementById("VS").innerHTML='PLAYER 1 LOOSE',vs.style.backgroundColor = "#035B0C" 
            }
        }

        if(pilihan === 2){
            if(com === 2){
                console.log("draw"), document.getElementById("VS").innerHTML='Draw',vs.style.backgroundColor = "#035B0C" 
            }else if (com === 1){
                console.log("menang"), document.getElementById("VS").innerHTML='PLAYER 1 WIN',vs.style.backgroundColor = "#035B0C" 
            } else if (com === 0){
                console.log("kalah"), document.getElementById("VS").innerHTML='PLAYER 1 LOOSE',vs.style.backgroundColor = "#035B0C" 
            }
        }
    }   

    function choice(){
        const com= Math.floor((Math.random() *3)- 0.0001);

        const el= document.querySelectorAll("div.com-choice > div.choice");

        el[com].style.backgroundColor='grey';
        return com;
    }
        
    

    


    








