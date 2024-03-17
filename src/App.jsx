import { useState } from 'react'
import DimensionForm from './DimensionForm'
import PixelCanvas from './PixelCanvas'

function App() {
  
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const [pixelData, setPixelData] = useState(Array(dimensions.width * dimensions.height).fill("")); 
  const [selectedColor, setSelectedColor] = useState('#183922')

  return (
    <div className='home'>
      <DimensionForm onSubmit={setDimensions}/>
      <div>current: {dimensions.height} x {dimensions.width}</div>
      <PixelCanvas width={dimensions.width} height={dimensions.height} pixelData={pixelData} selectedColor={selectedColor} onClick={setPixelData} />
    </div>
  )
}

export default App
