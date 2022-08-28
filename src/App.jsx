import Home from './pages/Home/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExerciseDetails from './pages/ExerciseDetails/ExerciseDetails'
import Footer from './components/Footer/Footer'
function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/exercise/:id' element={<ExerciseDetails />} exact />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default App
