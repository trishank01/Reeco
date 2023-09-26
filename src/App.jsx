//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import OrdersBar from './components/OrdersBar'
import ProductTable from './components/ProductTable'
import Status from './components/Status'

function App() {
 // const [count, setCount] = useState(0)
//
  return (
    <>
     <Header/>
     <OrdersBar/>
     <div className='bg-[#FBFBFB] py-[50px] px-[100px]'>
       <Status/>
       <ProductTable/>
     </div>
  
    </>
  )
}

export default App
