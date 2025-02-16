
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './components/pages/login/Login'
import Dashboard from './components/pages/dashboard/Dashboard';
import { CreateQuiz } from './components/pages/createquiz/CreateQuiz';
import { Toaster } from 'react-hot-toast';
import { EditQuiz } from './components/pages/createquiz/EditQuiz';

function App() {

  return (
    <Router>
    <div className='toaster'><Toaster position="top-center"/></div>

    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/create' element={<CreateQuiz/>}></Route>
      <Route path='/update/:quizId' element={<EditQuiz/>}></Route>


    </Routes>
    </Router>
  )
}

export default App
