
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/HomePage/Home/Home';
import Perfumes from './Pages/HomePage/Perfumes/Perfumes';
import UpdatePerfume from './Pages/HomePage/UpdatePerfume/UpdatePerfume';
import Login from './Pages/LoginPage/Login/Login';

import PrivateAuth from './Pages/LoginPage/PrivateAuth/PrivateAuth';
import Register from './Pages/LoginPage/Register/Register';
import ManageInventory from './Pages/ManagePage/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

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
      <Route path='/update-perfume/:id' element={<PrivateAuth>
       <UpdatePerfume></UpdatePerfume>
      </PrivateAuth>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/addItem' element={<PrivateAuth>
        <AddItem></AddItem>
      </PrivateAuth>}></Route>
      <Route path='/myItems' element={<PrivateAuth>
        <MyItems></MyItems>
      </PrivateAuth>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
