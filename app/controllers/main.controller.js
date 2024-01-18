// Function to generate a unique user ID
function generateUniqueUserId() {
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1 //months from 1-12
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();

    if(month < 10) {
        month = "0" + month 
    }

    if(day < 10) {
        day = "0" + day
    }

    const uid = year + "-" + month + "-" + day;
    return uid
}

module.exports = {

    // show the home page
    showHome: (req, res) => {
        // Check if the user has a unique identifier cookie
        const newDate = generateUniqueUserId()
        let userId = req.cookies.userId;
        console.log("UID: ", userId)
        console.log("Date: ", newDate)
        
        if (userId === newDate) {
            // res.send('User already attempted Wordle!');
            res.render('pages/home', {numGuessRows: 0, numFormControls: 0, mode: "", user:true });
        } else {
            // res.send('Welcome to Wordle! Start your attempt.');
            res.render('pages/home', {numGuessRows: 0, numFormControls: 0, mode: "Please Select a Difficulty", user:false});
        }
    }
}