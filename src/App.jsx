import {Toaster} from 'react-hot-toast'
import {Routes, Route,  useLocation} from 'react-router-dom'

import { Home, Movies, MovieDetails, SeatLayout, MyBookings, Favorite } from './pages';
import { Navbar, Footer } from './components';
import AddShows from './pages/Admin/AddShows'
import Dashboard from './pages/Admin/Dashboard';
import ListBookings from './pages/Admin/ListBookings'
import ListShows from './pages/Admin/ListShows'
import Layout from './pages/Admin/Layout'


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path="/"                       element={<Home/>}         />
      <Route path="/movies"                 element={<Movies/>}       />
      <Route path="/movies/:id"             element={<MovieDetails/>} />
      <Route path="/movies/:id/:date"       element={<SeatLayout/>}   />
      <Route path="/my-bookings"            element={<MyBookings/>}    />
      <Route path="/favorite"               element={<Favorite/>}    />
 <Route path="/admin/*" element={<Layout/>}>
 <Route index element={<Dashboard/>}/>
 <Route path="add-shows" element={<AddShows/>}/>
 <Route path="list-shows" element={<ListShows/>}/>
 <Route path="list-bookings" element={<ListBookings/>}/>
 </Route>
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
