import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import User from './components/User'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path='/update/:id' element={<UpdateUser />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
