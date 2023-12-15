module.exports = {
    GetData: GetData,
    SetDifficulty: SetDifficulty
}

async function GetData(req, res) {
    try {
        const response = await fetch(`https://www.nytimes.com/svc/wordle/v2/${req.query.date}.json`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
       
      }
}

async function SetDifficulty(req, res) { 
  try {
    let rows = 0
    let gameMode = ""
    const diff = req.body.selection
    if(diff === "easy") {
      rows = 6
      gameMode = "Easy"
    }
    else if(diff === "medium") {
      rows = 4
      gameMode = "Medium"
    }
    else {
      rows = 2
      gameMode = "Hard"
    }
    res.render('pages/home', {numGuessRows: rows, numFormControls: 5, mode: `${gameMode} Mode`, user:false });
  } catch (error) {
    console.log(error)
  }
}