const enter = document.getElementById('enter')
enter.disabled = true

let rowcount = 0
let totalGuessRow  = document.getElementsByClassName('guess-row').length
let len = document.getElementsByClassName('guess-row')[rowcount].childNodes.length
let letter = document.getElementsByClassName('guess-row')[rowcount].childNodes

let count = 0
let finalStr = ""
let WORDLE_ANSWER = ""

function keyInputEventListener(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        key = event.key.toUpperCase()
        input(key)

    }
    else if(event.key === "Enter") {
        if(enter.disabled === false) {
            final_answer()
        }
    }
    else if(event.key === "Backspace") {
        del()
    }
}

document.addEventListener('keydown', keyInputEventListener)

function changeRow(rowcount) {
    len = document.getElementsByClassName('guess-row')[rowcount].childNodes.length
    letter = document.getElementsByClassName('guess-row')[rowcount].childNodes
    count = 0
    enter.disabled = true
    finalStr = ""
}

function input(str) {
    
    for (i = 0; i < len; i++) {
        if(letter[i].nodeName === "DIV") {
            if(letter[i].textContent === "") {
                letter[i].textContent = str
                finalStr += letter[i].textContent.toLowerCase()
                count++;
                break
            }
        }
    }
    if(count == 5) {     
        enter.disabled = false   
    }
}

function del() {
    for (i = len-1; i >= 0; i--) {
        if(letter[i].nodeName === "DIV") {
            if(letter[i].textContent !== "") {
                letter[i].textContent = ""
                count--;
                finalStr = finalStr.substring(0, count).toLowerCase()
                break
            }
        }
    }
    if(count != 5) {
        enter.disabled = true
        
    }
}


function getAnswer() {
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1 //months from 1-12
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    newdate = year + "-" + month + "-" + day;

    $.ajax({
        url: '/fetchdata',
        method: 'GET',
        data: {
            date: newdate
        },
        success: function(result){
            WORDLE_ANSWER = result.solution
           
        },
        error: function(result){
            console.log("error with ajax")       
        }
    });
}
getAnswer()

function changeColor(str, color) {
    for (i = 0; i < len; i++) {
        if(letter[i].nodeName === "DIV") {
            if(letter[i].textContent === str) {
                letter[i].style.backgroundColor = color;
                // break
            }
        }
    }
}

function final_answer() {
    //if user got answer
    if(finalStr === WORDLE_ANSWER) {
        changeRow(rowcount)
        document.body.style.pointerEvents = "none";
        document.removeEventListener('keydown', keyInputEventListener)
        for (i = 0; i < len; i++) {
            if(letter[i].nodeName === "DIV") {
                letter[i].style.backgroundColor = "green";
            }
        }
        
        $('.modal-body').html("You won!!");
        $('#staticBackdrop').modal('show'); 
    }
    else{
        //if user has 0 attempts remaing
        if(rowcount+1 === totalGuessRow) {
            for (let i = 0; i < WORDLE_ANSWER.length; i++) {
                for (let j = 0; j < finalStr.length; j++) {
                    //check if letter at index are both same
                    if((finalStr[j] === WORDLE_ANSWER[i]) && (i === j)) {                        
                        changeColor(finalStr[j].toUpperCase(), "green")
                    }
                    else if((finalStr[j] === WORDLE_ANSWER[i])) {
                        changeColor(finalStr[j].toUpperCase(), "rgb(211, 184, 12)")   
                    }   
                }     
            }
            for (let index = 0; index < finalStr.length; index++) {
                console.log(finalStr[index])
                    if(WORDLE_ANSWER.includes(finalStr[index]) === false) {
                        changeColor(finalStr[index].toUpperCase(), "grey")   
                    }
            }
            changeRow(rowcount)
            document.body.style.pointerEvents = "none";
            document.removeEventListener('keydown', keyInputEventListener)
            $('.modal-body').html(`Better Luck Next Time<br>Answer: ${WORDLE_ANSWER}`);
            $('#staticBackdrop').modal('show'); 
        }
        else {
            //still going
            for (let i = 0; i < WORDLE_ANSWER.length; i++) {
                for (let j = 0; j < finalStr.length; j++) {
                    //check if letter at index are both same
                    if((finalStr[j] === WORDLE_ANSWER[i]) && (i === j)) {                        
                        changeColor(finalStr[j].toUpperCase(), "green")
                    }
                    else if((finalStr[j] === WORDLE_ANSWER[i])) {
                        changeColor(finalStr[j].toUpperCase(), "rgb(211, 184, 12)")   
                    }
                    
                }
            }
            for (let index = 0; index < finalStr.length; index++) {
                console.log(finalStr[index])
                    if(WORDLE_ANSWER.includes(finalStr[index]) === false) {
                        changeColor(finalStr[index].toUpperCase(), "grey")   
                    }
            }
            rowcount++
            changeRow(rowcount)
        }
    }
   
    return false
}
