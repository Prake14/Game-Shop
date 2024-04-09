import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import '../src/Singlegame.css';

function Singlegame() {
    const {id} = useParams()
    const[singlegame, setsinglegame]=useState()
    useEffect(()=>{
      axios.post(`https://game-website-5hi0.onrender.com/singlegame/${id}`).then((res)=>{
        console.log(res.data)
        setsinglegame(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
  return (
    <div>
    <div  className='singleboxs'style={{'background-color':'grey',}}>
      <div className='til'>
        <h4 className='ti' style={{'color':'blue'}}><b>Title:</b></h4>
      <h4 className='tisub'>{singlegame && singlegame.title}</h4></div>
      <div className='platform'>
        <h4 style={{'color':'blue'}}>Platfrom:</h4>
      <h4 className='platsub'>{singlegame && singlegame.platform}</h4></div>
      <div className='genre'>
        <h4 style={{'color':'blue'}}>Genre:</h4>
      <h4 className='genree'>{singlegame && singlegame.genre}</h4></div>
      <img className='imgs' alt='game' src={singlegame && singlegame.thumbnail}></img>
      <div className='pub'>
        <h4 style={{'color':'blue'}}>Published by:</h4>
        <h4 className='pubb'>{ singlegame && singlegame.publisher}</h4></div>
        <div className='dev'>
        <h4 style={{'color':'blue'}}>Developed by:</h4>
        <h4 className='devs'>{ singlegame && singlegame.developer}</h4></div>
        <div className='gameurl'>
        <h4 style={{'color':'blue'}}>Game URL:</h4>
        </div>
        <div className='urlss'><a href = {singlegame && singlegame.game_url} className="mainurls">{singlegame && singlegame.game_url}</a></div> 
      <div className='reled'>
        <h4 style={{'color':'blue'}}>Release date:</h4>
      <h4 className='releds'>{singlegame && singlegame.release_date}</h4></div>
  </div>
  </div>
  )
}

export default Singlegame