import { useState } from "react"

function DimensionForm({ onSubmit }) {
  
  const [dimension, setDimension] = useState('16'); 

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({width: dimension, height: dimension});
  }

  return (
    <div className="dimension-form">
      <h2>pick resolution</h2>
      <form onSubmit={handleSubmit} id='1'>
        <select
          value={dimension}
          onChange={(event) => setDimension(event.target.value)}
        >
          <option value="16">16x16</option>
          <option value="24">24x24</option>
        </select>
        <button>select</button>
      </form>
    </div>
  );
}

export default DimensionForm