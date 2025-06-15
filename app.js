let boxes = document.querySelectorAll('.box');
let reset_bin = document.querySelector("#reset_bin");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame= () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked ");
       if(turnO){
            box.innerText= "O";
            turnO= false;
       }else{
        box.innerText ="X";
        turnO = true;
       }
       box.disabled = true;


       checkwinner();


    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showwinner=(Winner)=>{
    msg.innerText = `Congratulation, The  Winner is  ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=() =>{
    for(let pattern of winpatterns){                 
             let pos1val = boxes [pattern[0]].innerText;
             let pos2val = boxes [pattern[1]].innerText;
             let pos3val = boxes [pattern[2]].innerText;


             if(pos1val !=""&& pos2val !="" && pos3val !=""){
             if(pos1val=== pos2val&& pos2val===pos3val){
                console.log ("Winner",pos1val);
                showwinner(pos1val);

             }
            }
        }
};

newgamebtn.addEventListener("click",resetgame);
reset_bin.addEventListener("click",resetgame);
//this was done with the help of apna clg;