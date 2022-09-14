import React, { useEffect, useState } from 'react';
import Converter from './components/Converter/Converter';

function App() {


  navigator.geolocation.getCurrentPosition(success, error, {
    
    enableHighAccuracy: true
  })
  
  function success({ coords } : any) {
   
    const { latitude, longitude } = coords
    const position = [latitude, longitude]
    console.log(position) 
    
  }
  
  function error({ message } : any) {
    console.log(message) 
  }


  const [latest, setLatest] = useState({})

useEffect(()=>{
  const getLatest = async () => {
    const latest = await fetch('https://api.apilayer.com/exchangerates_data/latest', {
      headers: {
        apikey: 'R2x93LlvSsmaGYIaCzm6RdTM4F6kbS9q'
      }
    })
    const data = await latest.json()
    setLatest(prev => ({...prev, ...data.rates}))
  }
  getLatest()
},[])

useEffect(()=>{
  console.log(latest);
  
},[latest])

  return (
    <div className="container">
      <Converter latest={latest}/>
    </div>
  );
}

export default App;
