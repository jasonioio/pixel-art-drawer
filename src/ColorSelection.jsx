import RGBAPixel from "./RGBAPixel";

const ColorSelection = ({ onClick }) => {
  const colors = [
    new RGBAPixel(245, 40, 145, 1),
    new RGBAPixel(42, 74, 226, 1),
    new RGBAPixel(221, 30, 0, 1),
    new RGBAPixel(221, 214, 0, 1),
    new RGBAPixel(27, 108, 35, 1),
    new RGBAPixel(255, 255, 255, 1),
    new RGBAPixel(0, 0, 0, 1),
    new RGBAPixel(223, 161, 31, 1),
    new RGBAPixel(120, 234, 240, 1),
    new RGBAPixel(207, 255, 102, 1),
    new RGBAPixel(245, 221, 37,11), 
    new RGBAPixel(174, 31, 209, 1)
  ];

  const height = 2;
  const width = colors.length / height;
  

  function handleSelectColor(color) {
    onClick(color);
  }

  function renderColorSelection() {
    const colorSelection = [];
    var brKey = -1;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = y * width + x; 
        colorSelection.push(
          <button
            key={index}
            className="color-select"
            style={{ backgroundColor: colors[index] ? colors[index].toString() : "transparent"}}
            onClick={() => handleSelectColor(colors[index])}
          ></button>
        );
      }
      colorSelection.push(<br key={brKey--} />);
    }

    return colorSelection; 
  }

  return (
    <div>
      {renderColorSelection()}
    </div>
  )
  
}

export default ColorSelection