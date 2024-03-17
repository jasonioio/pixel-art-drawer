const PixelCanvas = ({ dimensions, pixelData, selectedColor, onClick }) => {
  const height = dimensions.height;
  const width = dimensions.width; 

  const handlePixelClick = (x, y) => {
    const newPixelData = []; 
    for (let x = 0; x < width; x++) {
      newPixelData[x] = pixelData[x].slice(); 
    }
    newPixelData[x][y] = selectedColor;
    onClick(newPixelData);
    console.log(newPixelData);
  }

  const renderPixels = () => {
    const pixels = [];
    var pixelKey = 0;
    var brKey = -1;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        pixels.push(
          <button
            key={pixelKey++}
            className="pixel"
            style={{ backgroundColor: (pixelData[x] && pixelData[x][y]) ? pixelData[x][y].toString() : 'transparent' }}
            onClick={() => handlePixelClick(x, y)}
          ></button>
        );
      }
      pixels.push(<br key={brKey--} />);
    }

    return pixels;
  }

  return (
    <div className="pixel-canvas">
      {renderPixels()}
    </div>
  );
}

export default PixelCanvas