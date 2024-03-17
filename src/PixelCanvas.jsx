const PixelCanvas = ({ width, height, pixelData, selectedColor, onClick }) => {

  const handlePixelClick = (index) => {
    const newPixelData = pixelData.slice();
    newPixelData[index] = selectedColor;
    onClick(newPixelData);
  }

  const renderPixels = () => {
    const pixels = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = x + width * y;
        pixels.push(
          <button
            key={index}
            className="pixel"
            style={{ backgroundColor: pixelData[index] }}
            onClick={() => handlePixelClick(index)}
          ></button>
        );
      }
      pixels.push(<br />);
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