module.exports = {

    // show the home page
    showHome: (req, res) => {
        res.render('pages/home', {numGuessRows: 0, numFormControls: 0, mode: "Please Select a Difficulty"});
    }
}
