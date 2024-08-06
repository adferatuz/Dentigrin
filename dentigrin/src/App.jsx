import { useState } from 'react'
import Layout from './components/layout/layout'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'
import Enrutamiento from './router/enrutamiento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Layout>
          <Enrutamiento/>     
        </Layout>
        <Footer/>         
    </>             
    
  )
}

export default App
