
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Create from './pages/create';
import NoteDetailPage from './pages/NoteDetailPage';
import {toast} from 'react-hot-toast'

const  App = () => {
  return (
    <div>
      <button className="btn btn-outline" onClick={() => toast.success("fuck you")}>click me</button>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<Create />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App;
