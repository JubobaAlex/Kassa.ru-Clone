import Header from './components/Header'
import Home from './pages/Home'
import Cinema from './pages/Сinema'
import './App.css'
import List from './pages/List'
import Footer from './components/Footer'
import { Route , Routes, BrowserRouter } from 'react-router'
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route index path='/' element={<Home />}/>
            <Route path='/cinemas' element={<Cinema />} />
            <Route path='/list' element={<List />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App