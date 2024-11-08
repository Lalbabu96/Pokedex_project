
import { Link } from 'react-router-dom'
import './App.css'
import CustomRouters from './Routes/CustomRoutes'

function App() {
  return (
    <div className="outer-pokedex">   
        <h1 id="pokedex-heading"><Link to="/">Hi, I am Pokemon</Link></h1>     
        <CustomRouters/>    
    </div>
  )
}

export default App