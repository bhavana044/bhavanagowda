// import React from 'react'
// import Header from './Components/Header'
// import Body from './Components/Body'
// import Footer from './Components/Footer'

// function App () {
//   return (
//     <div>
//       <Header></Header>
//       <Body></Body>
//       <Footer></Footer>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Contact from './Components/Contact'
import TodoList from './Components/TodoList'

import {BrowserRouter as Router ,Routes, Route} from
 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <div>
            <Navigation/>
        </div>
    
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/todolist'element={<TodoList />} />
    </Routes>
    </Router>
    </div>
  )
}
export default App