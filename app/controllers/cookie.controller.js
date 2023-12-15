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
    const newUserId = generateUniqueUserId();

    console.log("Existing Cookie Value:", req.cookies.userId);
    
    // Set the new value for the cookie
    res.cookie('userId', newUserId);
    
    console.log("Setting Cookie: ", newUserId);
    
    // Log the updated value before sending the response
    console.log("Updated Cookie Value:", newUserId);
    
    // Send the response
    res.send("Cookie updated.");
    


}
