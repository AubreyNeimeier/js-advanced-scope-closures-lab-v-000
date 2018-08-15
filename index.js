
function produceDrivingRange(blockRange){
    return function(start, end){
        let numStart = parseInt(start.slice(0,2));
        let numEnd = parseInt(end.slice(0,2));
        let absDistance = Math.abs(numEnd - numStart);
        if (absDistance < blockRange){
            return `within range by ${blockRange - absDistance}`
        }
        else {
            return `${absDistance - blockRange} blocks out of range`
        }
    }
}


function produceTipCalculator(tip){
    return function(total){
        return tip * total
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