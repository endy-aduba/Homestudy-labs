

function solution(P, C) {
    //Provide Your solution here 
    let noOfMatches = P/2;
    if(noOfMatches >= C){
        return C;
    }
    else if(noOfMatches <C){
        return Math.floor(P/2);
    }
}

module.exports = solution;