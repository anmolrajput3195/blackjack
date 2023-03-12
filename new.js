let firstcard = 10;
let secondcard =20;
let sum = firstcard + secondcard;
let message = "";
let message1 = document.getElementById("message")
console.log(message1);


function startgame(){
    if(sum<=21){
        message = "hello you have to draw a card";
    }else if(sum===21){
        message ="WOO you are winner";
    }else if(sum>21){
        message = "you are out";
    }
message1.textContent = message;
}