import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/about";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Home from "./pages/Home";
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
       <Route path="/about" element={<About />} /> 
       <Route path='/listing/:listingId' element={<Listing />} />
       <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
