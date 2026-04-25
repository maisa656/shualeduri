import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

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