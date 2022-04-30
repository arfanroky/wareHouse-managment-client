
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    </Routes>
    </>
  );
}

export default App;
