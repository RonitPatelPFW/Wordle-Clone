module.exports = {
    setCookie: setCookie

}
// Function to generate a unique user ID
function generateUniqueUserId() {
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1 //months from 1-12
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    const uid = year + "-" + month + "-" + day;
    return uid
}

async function setCookie(req, res) {
   const newUserId = generateUniqueUserId()
    res.cookie('userId', newUserId);

}
