const enter = document.getElementById('enter')
enter.disabled = true

// let rowcount = 0

const len = document.getElementsByClassName('guess-row')[0].childNodes.length
const letter = document.getElementsByClassName('guess-row')[0].childNodes

let count = null
let finalStr = ""

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

function final_answer() {
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
            if(finalStr === result.solution) {
                alert("YAY GOOD JOB")

            }
            else{
                alert("NO GOOD JOB")
            }
        },
        error: function(result){
            console.log("error with ajax")       
        }
    });
    return false
}