import satData from './satData'

const Buttons = ({ filterByType, setSat, allOrbitTypes }) => {

  return (
    <div>
      {allOrbitTypes.map((type, idx) => 
          <button onClick={() => filterByType(type)} key={idx}>{type}</button>)}
      <button onClick={()=>{setSat(satData)}}>All Orbits</button>
    </div>
  )
}

export default Buttons