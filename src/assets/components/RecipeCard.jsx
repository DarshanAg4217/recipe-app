import { Link } from "react-router-dom";



const RecipeCard = (props) => {
    const {id, url , title, Chef, description, category, ingredient, instructions} = props.recipe

  return (
    <div className="bg-gray-700  text-white rounded-xl shadow-lg overflow-hidden w-full">
      {/* Image */}
      <img 
        src={url} 
        alt={title} 
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-yellow-300 mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-2">👨‍🍳 {Chef}</p>
        <p className="text-gray-200 text-sm line-clamp-2">{description}</p>

        {/* Category Tag */}
        <span className="inline-block bg-yellow-500 text-black text-xs px-2 py-1 rounded mt-2">
          {category}
        </span>

        {/* Ingredients */}
        <div className="mt-3">
          <h3 className="font-semibold text-yellow-300">Ingredients:</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm">
            {ingredient.split(",").map((ing, idx) => (
              <li key={idx}>{ing.trim()}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-3">
          <h3 className="font-semibold text-yellow-300">Instructions:</h3>
          <ol className="list-decimal list-inside text-gray-300 text-sm">
            {instructions.split(",").map((step, idx) => (
              <li key={idx}>{step.trim()}</li>
            ))}
          </ol>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
        <Link to={`/recipies/details/${props.recipe.id}`}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded">
            View
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
