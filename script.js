function getHistory(){
   return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
   if(num==""){
        document.getElementById("output-value").innerText=num;
    } else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
//formats to make it commar seperated
function getFormattedNumber(num){
    let n = Number(num);
    let value=n.toLocaleString("en")
    return value;
}

//printOutput("595959595");
//have not done the reverseNumberFormat
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//Operations-get operator clicked

let operator =document.getElementsByClassName("operator");
for (let i=0; i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        if (this.id=="clear"){
            //we check the ID is clear then we get history and output to both
            //empty themselves.
            printHistory("");
            printOutput("")
        } 
        else if(this.id=="backspace"){
            //backspace should not deal with the commas in output
            //convert to strong and remove the last character
            let output=reverseNumberFormat(getOutput()).toString();
            if(output){//if output is true, meaning it has a value
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
    });
}    
//Numbers-get numbers clicked
let number =document.getElementsByClassName("number");
for (let i=0;i<number.length;i++){
    number[i].addEventListener('click', function(){
        let output=reverseNumberFormat(getOutput());
        if(output!=NaN){//if output is a number value
        output=output+this.id;
        printOutput(output);
        //now i can concatnate the numbers that a user clicks.
    }
    })
}
