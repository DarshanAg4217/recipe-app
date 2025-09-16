import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipies from "../pages/Recipies"
import About from "../pages/About"
import RecipiesDetails from "../pages/RecipiesDetails"

import Create from "../pages/Create"


const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/recipies" element={<Recipies />} />
    <Route path="/recipies/details/:id" element={<RecipiesDetails />} />
     <Route path="/about" element={<About />} />
     <Route path="/create" element={<Create />} />
    
   </Routes>
  )
}

export default MainRoutes
