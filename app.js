let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg");
let para=document.querySelector("#win");

let turnO=true;
let count=0;

const winPatterns=[[0,1,2], [0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
         count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
         }
    });
});


const gameDraw = () => {
  para.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner) =>{
    para.innerText= `Congratulations, Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () =>{
    for ( let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos3 !="" && pos2 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};
    
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)
