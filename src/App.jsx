
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css'
import BookShow from './pages/BookShow'
import Homepage from './pages/Homepage'
import ShowData from './pages/ShowData'

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route path='/data/:id' element={<ShowData/>}/>
          <Route path='/book' element={<BookShow/>}/>
        </Routes>
      </Router>
  )
}

export default App
