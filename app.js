
let boxes =document.querySelectorAll(".box");
let reset =document.querySelector("#reset");
let newgamebtn = document.querySelector("#newb");
let msgcontainer = document.querySelector(".msgc");
let msg = document.querySelector("#msg");
let winnerfound=false;

let turno = true;
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
const resetgame =() => {
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        
        if(turno){
            box.classList.add("o-style");
            
            box.innerText = "O";
            turno= false;

        }
        else{
            box.classList.add("x-style");
            
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();


    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }; 
};
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x-style", "o-style");
    }; 
};

const showwinner = (winner) => {

    msg.innerText = `congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxes();
};
const draw = () => {
    msg.innerText=`The Game is a Draw`;
    msgcontainer.classList.remove("hide")
    disableboxes();
    
}

const checkWinner = () => {
    for(let pattern of winpatterns){

        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                winnerfound=true;
                showwinner(pos1val);
                return;

            };

        };
    };
    let allfilled = Array.from(boxes).every(box =>box.innerText !== "");
    if(!winnerfound && allfilled){
        draw();
    }

};
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
