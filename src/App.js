import css from './App.module.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Snacks from './components/Snacks/Snacks';
import Salads from './components/Salads/Salads';
import NotFound from './components/NotFoundPage/NotFound';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/snacks' element={<Snacks />} />
            <Route path='/salads' element={<Salads />} />
            <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
