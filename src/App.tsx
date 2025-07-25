import Layout from './layout/index'
import Table from './pages/Table'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="table" element={<Table />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
      </Layout>
    </div>
  )
}

export default App