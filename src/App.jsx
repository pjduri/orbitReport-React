import Buttons from './components/Buttons'
import Table from './components/Table'
import Banner from './components/Banner'
import { useState, useEffect } from 'react'
import satData from './components/satData'


function App() {

  const [sat, setSat] = useState(satData)
  const allOrbitTypes = [... new Set(satData.map(data => data.orbitType))]

  
  
  const filterByType = (currentType) => {
    const satsOfType = satData.filter(satellite => 
      satellite.orbitType === currentType)
      
    setSat(satsOfType)
  }
    
    return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        allOrbitTypes={allOrbitTypes} />
      <Table sat={sat} />
    </div>
  )
}

export default App