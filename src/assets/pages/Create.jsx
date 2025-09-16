import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipecontext } from "../context/RecipeContext"
import { toast } from "react-toastify"

const Create = () => {
    const { data, setData } = useContext(recipecontext)
    const { register, handleSubmit, reset } = useForm()

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid()
        console.log(recipe)
        setData([...data, recipe])
        toast.success("New Recipe Added🍽️")``
        reset()
    }

    return (
        <div className="min-h-screen bg-gray-800 flex justify-center items-start py-10">
            <form
                onSubmit={handleSubmit(SubmitHandler)}
                className="bg-gray-700 p-6 rounded-xl shadow-md w-full max-w-lg"
            >
                <input
                    className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
                    {...register("url")}
                    type="url"
                    placeholder="Enter Image URL"
                />
                <input
                    className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
                    {...register("title")}
                    type="text"
                    placeholder="Recipe Title"
                />
                <input
                    className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
                    {...register("Chef")}
                    type="text"
                    placeholder="Chef Name"
                />
                <textarea
                    className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
                    {...register("description")}
                    placeholder="//Start from here"
                ></textarea>
                <textarea
                    className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
                    {...register("ingredient")}
                    placeholder="Write ingredients separated by comma"
                ></textarea>
                <textarea
                    className="block w-full border-b bg-transparent text-white placeholder-gray-400 outline-0 p-2 mt-[20px]"
                    {...register("instructions")}
                    placeholder="Write instruction separated by comma"
                ></textarea>
                <select
                    className="block w-full bg-gray-600 text-white border-b outline-0 p-2 mt-[20px] rounded"
                    {...register("category")}
                >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                    <option value="Beverage">Beverage</option>
                </select>
                <button
                    className="block mt-5 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Save Recipe
                </button>
            </form>
        </div>
    )
}

export default Create
