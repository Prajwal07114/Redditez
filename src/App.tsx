
import { Navbar } from './components/Navbar'
import { Route,Routes} from 'react-router'
import { Home } from './pages/Home'
import { CreatePost } from './pages/CreatePost'
function App() {
return(

<div>
  
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path ='/create' element={<CreatePost/>} />
  </Routes>
  </div>
  

)
}
export default App
