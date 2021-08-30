let cash=100
bet_amount=1
let winCount=0;
let lossCount=0;
let total_no_of_bets=0;

while ( (cash > 0 ) && ( cash < 200 )){
    total_no_of_bets++;
     // random number to  generate win or loss bet 
    let flag = Math.floor(Math.random()*10)%2;  
    //flag== 1  to won the bet
    if (flag == 1){                            
        cash = cash + bet_amount;
        winCount++;
    }
    //flag== 0  to lost the bet
    if(flag == 0){                           
        cash = cash - bet_amount;
        lossCount++;
    }
}
console.log("Total number of Bets = "+total_no_of_bets);
console.log("No. of times win = "+winCount);
console.log("No. of times lost = "+lossCount);
console.log("Cash left = "+cash);