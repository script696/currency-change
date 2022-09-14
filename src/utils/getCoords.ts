const getCoords = ({ coords } : any) => {
 
  const { latitude, longitude } = coords
  const position = [latitude, longitude]
  return position 
}

const handleCoordsError = ({ message } : any)=> {
  console.log(message) 
}





export {getCoords, handleCoordsError}

