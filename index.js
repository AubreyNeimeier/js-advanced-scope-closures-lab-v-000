
function produceDrivingRange(blockRange){
    return function(start, end){
        let numStart = parseInt(start.slice(0,2));
        let numEnd = parseInt(end.slice(0,2));
        let absDistance = Math.abs(numEnd - numStart);
        // before you were repeating the difference math
        let difference = blockRange - absDistance
        if (difference > 0){
            return `within range by ${Math.abs(difference)}`
        }
        else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}


function produceTipCalculator(tipPercentage){
    return function(total){
        return tipPercentage * total
    }
}

function createDriver(){
    let driverId = 0;
    return class {
        constructor(name){
            this.name = name;
            this.id = ++ driverId;
        }
    }
}