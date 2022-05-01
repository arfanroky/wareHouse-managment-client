
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Home from './Pages/HomePage/Home/Home';
import Perfumes from './Pages/HomePage/Perfumes/Perfumes';
import SinglePerfumeDetail from './Pages/HomePage/SinglePerfumeDetail/SinglePerfumeDetail';
import Login from './Pages/LoginPage/Login/Login';
import PrivateAuth from './Pages/LoginPage/PrivateAuth/PrivateAuth';
import Register from './Pages/LoginPage/Register/Register';
import ManageInventory from './Pages/ManagePage/ManageInventory/ManageInventory';
import Header from './Shared/Header/Header';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/perfumes' element={<Perfumes></Perfumes>}></Route>
      <Route path='/manage-inventory' element={<PrivateAuth>
        <ManageInventory></ManageInventory>
      </PrivateAuth>}></Route>
      <Route path='perfumes/:perfumeId' element={<SinglePerfumeDetail></SinglePerfumeDetail>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/addItem' element={<AddItem></AddItem>}></Route>

    </Routes>
    </>
  );
}

export default App;
