import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import RecipeCard from "../components/RecipeCard"

const Recipies = () => {
  const { data } = useContext(recipecontext)

  return (
    <div className="min-h-screen bg-[#1E2A3A] p-6">
      <h1 className="text-2xl font-bold text-center text-yellow-400 mb-6">🍳 My Recipes</h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center text-white">
          <h2 className="text-2xl font-bold">Recipe not found!</h2>
        </div>
      )}

    </div>
  )
}

export default Recipies
