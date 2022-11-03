import './App.css';
import {Navbar,Login,Register,HotelList,Home,GoldenCurry,Teera,Twelve21,Azzuro,TheTenthFloor,Urbo,
   BookTable, AdminLogin, AdminRegister, AdminDashboard,BookingList, CancelledBookings,UserList,
   BookingHistory,UcancelledBookings} from './components'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
       <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/Home' element={<Home/>} ></Route>
        <Route exact path='/Login' element={<Login/>} ></Route>
        <Route exact path='/Register' element={<Register/>} ></Route>
        <Route exact path='/HotelList' element={<HotelList/>} ></Route>
        <Route exact path='/GoldenCurry' element={<GoldenCurry/>} ></Route>
        <Route exact path='/Teera' element={<Teera/>} ></Route>
        <Route exact path='/Twelve21' element={<Twelve21/>} ></Route>
        <Route exact path='/Azzuro' element={<Azzuro/>} ></Route>
        <Route exact path='/TheTenthFloor' element={<TheTenthFloor/>} ></Route>
        <Route exact path='/Urbo' element={<Urbo/>} ></Route>
        <Route exact path='/BookTable' element={<BookTable/>} ></Route>
        <Route exact path='/AdminLogin' element={<AdminLogin/>} ></Route>
        <Route exact path='/AdminRegister' element={<AdminRegister/>} ></Route>
        <Route exact path='/AdminDashboard' element={<AdminDashboard/>} ></Route>
        <Route exact path='/BookingList' element={<BookingList/>} ></Route>
        <Route exact path='/CancelledBookings' element={<CancelledBookings/>} ></Route>
        <Route exact path='/UserList' element={<UserList/>} ></Route>
        <Route exact path='/BookingHistory' element={<BookingHistory/>} ></Route>
        <Route exact path='/UcancelledBookings' element={<UcancelledBookings/>} ></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
