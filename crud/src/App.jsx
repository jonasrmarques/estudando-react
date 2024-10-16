import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const url = "http://localhost:3000/produtos"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)


  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(url)
      const data = await resp.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price: parseFloat(price) }
    let res;
  }

  return (
    <>
      <Header />
      <Body 
      products={products}
      handleEdit={handleEdit} />
      <Footer />
    </>
  )
}

export default App
