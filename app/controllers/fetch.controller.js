module.exports = {
    GetData: GetData
}

async function GetData(req, res) {
    try {
        const response = await fetch(`https://www.nytimes.com/svc/wordle/v2/${req.query.date}.json`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.render('pages/home', {answer: 'Internal Server Error' })
      }
}