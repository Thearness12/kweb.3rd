const clac ={};

clac.add = function(a, b){
    return a + b;
};

clac.subtract = function(a,b){
    return a - b;
};

clac.mult = function(a,b){
    return a * b;
};

clac.div = function(a,b){
    return a / b;
};

module.exports = clac;