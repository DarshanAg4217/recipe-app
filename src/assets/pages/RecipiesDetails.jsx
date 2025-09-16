import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);

  // react-hook-form
  const { register, handleSubmit, reset } = useForm();

  // Find current recipe
  const recipe = data.find((item) => item.id === id);

  // Dummy handler for now
  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => recipe.id === id)
    const copydata = [...data];
    copydata[index] = {...copydata[index], ...recipe};
    setData(copydata)
    toast.success("Recipe Updated!")
    
  };
  const Deletehandler = () => {
    const filterData = data.filter(r => r.id != id)
    setData(filterData)
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-800 flex items-center justify-center text-white">
        <h2 className="text-2xl font-bold">Recipe not found!</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white py-10 px-6 flex justify-center">
      <div className="max-w-6xl w-full bg-gray-700 rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Section - Recipe Info */}
        <div>
          {/* Image */}
          <img
            src={recipe.url}
            alt={recipe.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />

          {/* Title & Chef */}
          <h1 className="text-3xl font-bold mt-6">{recipe.title}</h1>
          <p className="mt-2 text-gray-300">👨‍🍳 {recipe.Chef}</p>

          {/* Category */}
          <span className="inline-block mt-3 bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
            {recipe.category}
          </span>

          {/* Description */}
          <p className="mt-6 text-gray-200 leading-relaxed">{recipe.description}</p>

          {/* Ingredients */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-yellow-400">Ingredients:</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {recipe.ingredient.split(",").map((ing, index) => (
                <li key={index}>{ing.trim()}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-yellow-400">Instructions:</h2>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              {recipe.instructions.split(",").map((step, index) => (
                <li key={index}>{step.trim()}</li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-900 px-4 py-2 rounded hover:bg-gray-600"
            >
              ⬅ Back
            </button>

         
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-600 rounded-lg p-6 flex items-center justify-center">
          <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="bg-gray-700 p-6 rounded-xl shadow-md w-full max-w-lg"
          >
            <input
              className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
              {...register("url")}
              type="url"
              defaultValue={recipe.url}
              placeholder="Enter Image URL"
            />
            <input
              className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
              {...register("title")}
              type="text"
               defaultValue={recipe.title}
              placeholder="Recipe Title"
            />
            <input
              className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
              {...register("Chef")}
              type="text"
               defaultValue={recipe.Chef}
              placeholder="Chef Name"
            />
            <textarea
              className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
              {...register("description")}
               defaultValue={recipe.description}
              placeholder="//Start from here"
            ></textarea>
            <textarea
              className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
              {...register("ingredient")}
               defaultValue={recipe.ingredient}
              placeholder="Write ingredients separated by comma"
            ></textarea>
            <textarea
              className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
              {...register("instructions")}
               defaultValue={recipe.instructions}
              placeholder="Write instruction separated by comma"
            ></textarea>
            <select
              className="block w-full bg-gray-600 text-white border-b outline-0 p-2 mt-[20px] rounded"
              {...register("category")}
               defaultValue={recipe.category}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Beverage">Beverage</option>
            </select>
               <div className="flex gap-3 mt-10">
              <button 
              type="submit"
              className="bg-blue-500 hover:bg-blue-900 text-black px-3 py-1 rounded">
                Recipe Update
              </button>
              <button 
              onClick={Deletehandler}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Recipe Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
