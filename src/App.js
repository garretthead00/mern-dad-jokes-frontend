import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import { Login } from './pages/Login'
import { Jokes } from './pages/Jokes'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Login/>}/>
          <Route path='jokes' element={<Jokes />}/>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
