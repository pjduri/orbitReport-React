import satData from './satData'
import './styling.css'

const Buttons = ({ filterByType, setSat, allOrbitTypes }) => {

  return (
    <div className='flex-container'>
      {allOrbitTypes.map((type, idx) => 
          <button onClick={() => filterByType(type)} key={idx}>{type} Orbit</button>)}
      <button onClick={()=>{setSat(satData)}}>All Orbits</button>
    </div>
  )
}

export default Buttons