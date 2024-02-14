import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom';
import Error from  './pages/Error';
import ExpenseDetails from './pages/ExpenseDetails'
import About from './pages/About';
import AddNewEntryPage from './pages/AddNewEntryPage'

import expenseData from './data/expenses.json'

function App() {
  
  return (
    <div>
      <Sidebar/>
      <Navbar/>
    
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/entry/:entryId" element= {<ExpenseDetails expenseData={expenseData}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/add-new-entry' element={<AddNewEntryPage/>}/>

        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  )
      
}

export default App