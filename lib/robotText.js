// single function to convert text 
const fs = require('fs');

// read json file with possible conversion
let myRawData = fs.readFileSync('./robotDictionary.json');
let jsonData = JSON.parse(myRawData);

// main function to convert string
exports.robotConversion = function(str){
    let convertedText = ""
    for(let x = 0; x < str.length; x++){
        if(doesLetterExistInBasicArray(str[x])){
            // TODO add in random decider
            convertedText += jsonData['basic'][str[x]];
        }
        else{
            convertedText += str[x];
        }
        
    }
    // TODO: if converted text is short enough add extention
    return convertedText;
}

// test function for exports test
exports.sayHello = function(){
    console.log("Hello");
    console.log(jsonData['basic']['a'])
    console.log(doesLetterExistInBasicArray("t"))
}

// function to check if a letter has a possible conversion
const doesLetterExistInBasicArray = function(letter){
    // check "basic" array for existence
    if(jsonData['basic'][letter] === undefined){
        return false;
    }
    return true;
}
