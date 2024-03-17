import { useEffect, useState } from 'react'
import DimensionForm from './DimensionForm'
import PixelCanvas from './PixelCanvas'
import RGBAPixel from './RGBAPixel';

function App() {
  
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const [pixelData, setPixelData] = useState(() => {
    const initialPixelData = [];
    for (let x = 0; x < dimensions.width; x++) {
      const col = [];
      for (let y = 0; y < dimensions.height; y++) {
        col.push(new RGBAPixel(0,0,0,0));
      }
      initialPixelData.push(col); 
    }
    return initialPixelData;
  }); 
  const [selectedColor, setSelectedColor] = useState(new RGBAPixel(123,44,2,1))

  useEffect(() => {
    // if dimensions greater than 0
    if (dimensions.width > 0 && dimensions.height > 0) {
      const newPixelData = [];
      // iterate through all to-be pixels in newPixelData
      for (let x = 0; x < dimensions.width; x++) {
        const col = [];
        for (let y = 0; y < dimensions.height; y++) {
          // if newPixelData[x][y] within bounds of old pixelData
          if (x < pixelData.length && y < pixelData[x].length) {
            // copy old pixelData[x][y] to newPixelData[x][y]
            col.push(pixelData[x][y]);
          } else {
            // new pixel with default values
            col.push(new RGBAPixel(0,0,0,0));
          }
        }
        newPixelData.push(col);
      }
      setPixelData(newPixelData);
    }
  }, [dimensions]);

  return (
    <div className='home'>
      <DimensionForm onSubmit={setDimensions}/>
      <div>current: {dimensions.height} x {dimensions.width}</div>
      <PixelCanvas dimensions={dimensions} pixelData={pixelData} selectedColor={selectedColor} onClick={setPixelData} />
    </div>
  )
}

export default App
