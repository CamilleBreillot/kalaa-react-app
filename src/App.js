import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CollectList from './components/CollectList'
import CollectForm from './components/CollectForm'

const App = () => {
  const [collects, setCollects] = useState([])

  useEffect(() => {
    const getCollects = async () => {
      const collectsFromServer = await fetchCollects()
      setCollects(collectsFromServer)
    }
    getCollects()
  }, [])

  //Fetch collects
  const fetchCollects = async () => {
    const res = await fetch('http://127.0.0.1:3000/api/v1/collections')
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

  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <div className="collect-container">
          {collects.length > 0 ? <CollectList collects={collects}
            onDelete={deleteCollect} /> : 'No collects yet'}
          <CollectForm onAdd={addCollect} />
        </div>
      </div>
    </div>
  );
}

export default App;
