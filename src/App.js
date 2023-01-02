import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [products, setProducts] = useState([])
  let information = ""
  let convertedInfo = ""
  async function getInfo() {
    information = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    convertedInfo = await information.json()
    console.log(convertedInfo)
    setProducts(convertedInfo)
  }
  return (
    <>
      <Navbar />
      <button onClick={getInfo}>GetInfo</button>
      <div className="container">
        <div className='row'>
          {products.map((element, index) => {
            return <Cards img={element.image_link} title={element.description} />
          })}
        </div>
      </div>

    </>
  )
}

export default App;
