import Header from './components/Header'
import { BrowserRouter } from 'react-router'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cinema from './pages/Сinema'
import './App.css'


function App() {
  return (
    <div>
      <div className='components-div'>
          <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/cinemas' element={<Cinema />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
