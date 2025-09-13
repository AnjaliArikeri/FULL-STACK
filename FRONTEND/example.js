//A bus is travelling from A to B at a speed of 30kmph the speed will be doubled for every 10 min .Calculate the distance from A to B so that the max speed is 120kmph he travelled for 96 min Then find the distance between A to B

  //  a >> b
//    sp=30kmph
  //  every 10 sp=sp*2
    //max speed=120
    //travelled for 96 min

let speed=30;
let distance=0
for(i=10;i<=90;i+=10){
    distance=distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance=distance+speed/10;
console.log(distance)




// The basic pay of an auto is 30rs for 4km for the next 5km the price is 10rs for the next 10km the price is 15 if the kms are more the price will be 20rs.User travelled 19.5km what will be the price?

function calculatePrice(distance) {
    let price = 0;

    if (distance <= 4) {
        price = 30;  
    } else if (distance <= 9) {
        price = 30 + (distance - 4) * 10;
    } else if (distance <= 19) {
        price = 30 + (5 * 10) + (distance - 9) * 15;
    } else {
        price = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20;
    }

    return price;
}
let distanceTravelled = 19.5;
console.log("Total Price: " + calculatePrice(distanceTravelled)+ "rs");