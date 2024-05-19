import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrincipalContainer from './container/Principal/Principal'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<PrincipalContainer/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
