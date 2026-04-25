import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {
    const [quantity, setQuantity] = useState(0)
    const [showCartLabel, setShowCartLabel] = useState(false)
  

  return (
    <div>
      <Header 
        quantity={quantity}
        showCartLabel={showCartLabel}
      />
      <Main 
        quantity={quantity} 
        setQuantity={setQuantity} 
        setShowCartLabel={setShowCartLabel}
      />
    </div>
  )
}

export default App
