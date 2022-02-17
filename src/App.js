import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Store from './Store'
import National from './National'


const App = () => {
  const [collects, setCollects] = useState([])
  const [indicators, setIndicators] = useState([])

  const [selectedFields, setSelectedFields] = useState([
  ])
  console.log(selectedFields)

  useEffect(() => {
    const getCollects = async () => {
      const collectsFromServer = await fetchCollects()
      setCollects(collectsFromServer)
    }
    const getIndicators = async () => {
      const indicatorsFromServer = await fetchIndicators()
      setIndicators(indicatorsFromServer)
    }
    const getFields = async () => {
      const fieldsFromServer = await fetchFields()
      setSelectedFields(fieldsFromServer)
    }
    getCollects()
    getIndicators()
    getFields()
  }, [])

  //Fetch collects
  const fetchCollects = async () => {
    const res = await fetch('http://127.0.0.1:3000/api/v1/collections')
    const data = await res.json()
    return data
  }

  //Fetch fields
  const fetchFields = async () => {
    const res = await fetch('http://127.0.0.1:3000/api/v1/fields')
    const data = await res.json()
    return data
  }

  //Fetch indicators
  const fetchIndicators = async () => {
    const res = await fetch('http://127.0.0.1:3000/api/v1/indicators')
    const data = await res.json()
    return data
  }

  //Add collect
  const addCollect = async (collect) => {
    const res = await fetch('http://127.0.0.1:3000/api/v1/collections', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(collect),
    })
    const data = await res.json()
    console.log(data)
    setCollects([...collects, data])
  }

  //Add field
  const addField = async (field) => {
    const res = await fetch('http://127.0.0.1:3000/api/v1/fields', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(field),
    })
    const data = await res.json()
    setSelectedFields([...selectedFields, data])
  }

  // Delete collect
  const deleteCollect = async (id) => {
    await fetch(`http://127.0.0.1:3000/api/v1/collections/${id}`, {
      method: 'DELETE',
    })
    setCollects(collects.filter((collect) => collect.id !== id))
  }

  // // Toggle active
  // const toggleActive = (id) => {
  //   setCollects(collects.map((collect) => collect.id === id ?
  //   { ...collect, } : collect ))
  // }

  // const fillSelected = () => {

  // }

  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div className="main-container">
          <Header />
          <Routes>
            <Route exact path="/" element={<Store collects={collects}
            onDelete={deleteCollect} onAdd={addCollect} selectedFields={selectedFields}/>}/>
            <Route exact path="/siege" element={<National collects={collects}
            onDelete={deleteCollect} indicators={indicators} selectedFields={selectedFields}
            addField={addField} />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
