const express = require ('express');
const axios = require('axios')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
}))
const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': 'd34d9e2dc3mshdde081308ac5ddcp18d339jsn78dfeedd2778',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
app.listen (PORT,()=>{
    console.log("server is running")
})

app.get("/games",async(req,res)=>{
    try {
        const response = await axios.request(options);
        //console.log(response.data);
        res.send(response.data)
    } catch (error) {
        console.error(error);
    }
})
app.post("/singlegame/:id",async(req,res)=>{
    const game_id =req.params.id
    //console.log(game_id+" hello")
    try {
        const response = await axios.request({
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: game_id},
            headers: {
    'X-RapidAPI-Key': 'd34d9e2dc3mshdde081308ac5ddcp18d339jsn78dfeedd2778',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
        })
        res.send(response.data)
        //console.log(response.data)
    } catch (error) {
        console.error(error);
    }
})

