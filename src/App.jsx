import {Home, Movies, MovieDetails,SeatLayout, MyBooking, Favorite} from './pages'
import { Navbar , Footer} from './components'
import {Toaster} from 'react-hot-toast'
import {Routes, Route,  useLocation} from 'react-router-dom'
import { AddShows, Dashboard, ListBookings, ListShows, Layout } from './pages/Admin'




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
      <Route path="/my-bookings"            element={<MyBooking/>}    />
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
