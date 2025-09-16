import { NavLink } from "react-router-dom"


const Nav = () => {
    return (
        <div className="flex justify-center items-center gap-x-20 text-2xl">

            <NavLink className={(e) => e.isActive ?"text-red-400" : ''} to={'/'}>Home</NavLink>

            <NavLink className={(e) => e.isActive ? "text-red-400" : ''} to={'/recipies'}>Recipies</NavLink>

            <NavLink className={(e) => e.isActive ? "text-red-400" :''} to={'/about'}>About</NavLink>

            <NavLink className={`px-4 py-2 bg-gray-900 rounded  ${(e) => e.isActive ? "text-red-400" : ''}`} to={'/create'}>Create Recipe</NavLink>

        </div>
    )
}

export default Nav
