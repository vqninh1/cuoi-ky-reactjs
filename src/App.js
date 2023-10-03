import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './components/layout/Index';
import HomePage from './pages/homepage/component/HomePage';
import About from './pages/about/About';
//import Layout from './components/layout/Index';


function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<h1>Cart</h1>} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Index/>}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<h1>Cart</h1>} />
        </Route>
        {/* <Route path='/abc' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<h1>Cart</h1>} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
