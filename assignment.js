//Problem No: 1 feetToMile

function feetToMile(feet){
    if(feet<0){
        return "distance can't a neagative number !"
    }
    else if(feet == null){
        return "give a feet value"
    }
    else{
        var result = (feet / 5280);
        var mile = result + " mile";
        
        return mile ;
    }
} 
var feetToMile = feetToMile(21120);
console.log(feetToMile);

//Problem No: 2 woodCalculator

function woodCalculator(chair,table,khat){
    var chairCount = chair * 1;
    var tableCount = table * 2;
    var khatCount = khat * 3;
    var totalWood = chairCount + tableCount + khatCount;
    return totalWood;
}
var totalWood = woodCalculator(1, 1, 1);
console.log(totalWood);

//Problem No: 3 brickCalculator

function brickCalculator(floor){
    let floorDataType = Number.isInteger(floor);
    if(floorDataType==true){
        if(floor>0){
            if (floor<=10){
               let totalFeet = floor*15 ;
               let totalBricks = totalFeet*1000;
               return totalBricks +" Bricks";               
            }else if(floor>10 && floor<=20){
                let floorFeet12 = floor-10;
                let floorFeet15 = floor-floorFeet12;
                let totalFeet = floorFeet15*15 + floorFeet12*12;
                let totalBricks = totalFeet*1000;
                return totalBricks;
            }else{
                let floorFeet10 = floor-20;
                let totalFeet = 10*15 + 10*12 + floorFeet10*10;
                let totalBricks = totalFeet*1000;
                return totalBricks;
            }
        }else{return"Building Floor Should Not Be 0 Or Negative";}
    }else{return"Input Should Be integer";}
}
let floor = 21;
let totalBricks = brickCalculator(floor);
console.log(totalBricks);

//Problem No: 4 tinnyFriend

function tinnyFriend(name) {
    var smallest = name[0];
    for(var i = 0; i < name.length; i++){
        var nameLetter = name[i];
        if(nameLetter.length < smallest.length){
            smallest = nameLetter;
        }
    }
    return smallest;
}
var tinnyName = tinnyFriend(['parvez','jahed','paru','mohiuddin','rahman','polash','tutul']);
console.log(tinnyName); 