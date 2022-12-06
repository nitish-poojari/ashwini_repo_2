import { BlogDetails, CreateBlog, Home, Login, Profile, Signup, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <><ToastContainer /><Routes>
      <Route exact path='/Home/:id' element={<Home />}></Route>
      <Route exact path='/' element={<Login />}></Route>
      <Route exact path='/Signup' element={<Signup />}></Route>
      <Route exact path='/Profile/:id' element={<Profile />}></Route>
      <Route exact path='/CreateBlog/:id' element={<CreateBlog />}></Route>
      <Route exact path='/BlogDetails/:id' element={<BlogDetails />}></Route>
      <Route path='/Navbar/:id' element={<Navbar />}></Route>
    </Routes></>
  );
}

export default App;
