import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ListExpenses from './components/ListExpenses'

function App() {

  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Footer />
      <ListExpenses/>
    </div>
  )
      
}

export default App