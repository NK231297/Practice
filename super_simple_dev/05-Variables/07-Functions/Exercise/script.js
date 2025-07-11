function greet(name){
    
};


function celTOfar (cel){
    return (cel * 9 / 5) + 32;
};

function farTOcel(far){
    return (far - 32) * 5 / 9;
};

function convTemp (num, unit){

    if(unit === "c" || unit === "C"){
        return celTOfar(num);
    }
    else if(unit === "f" || unit === "F"){
        return farTOcel(num);
    }
    else{
        console.log("Enter valid unit.");
    };

};

function kmTOmile(num){
    return num * 0.621;
};

function mileTOkm(num){
    return num * 1.6;
};

function kmTOfeet(num){
    return num * 3281;
};

function feetTOkm(num){
    return num / 3281;
};

function mileTOfeet(num){
    return num * 5280;
};

function feetTOmile(num){
    return num / 5280;
}

function convLength (num, from, to){
    if((from === "km" || from === "k") && (to === "mile" || to === "m")){
        return kmTOmile(num);
    }
    else if((from === "mile" || from === "m") && (to === "km" || to === "k")){
        return mileTOkm(num);
    }
    else if((from === "k" || from === "km") && (to === "feet" || to === "f" || to === "foot")){
        return kmTOfeet(num);
    }
    else if((from === "feet" || from === "f" || from === "foot") && (to === "km" || to === "k")){
        return feetTOkm(num);
    }
    else if((from === "m" || from === "mile") && (to === "feet" || to === "f" || to === "foot")){
        return mileTOfeet(num);
    }
    else if((from === "feet" || from === "f" || from === "foot") && (to === "m" || to === "mile")){
        return feetTOmile();
    }
    else if((from === "km" || from === "k") && (to === "km" || to === "k")){
        return `${from}km`
    }
    else if((from === "m" || from === "mile") && (to === "m" || to === "mile")){
        return `${from}mile`
    }
    else if((from === "f" || from === "feet" || from === "foot") && (to === "f" || to === "feet" || to === "foot")){
        return `${from}foot`
    }
    else{
        return `Entered unit from: ${from} / to: ${to} is Invalid`
    }
    

};