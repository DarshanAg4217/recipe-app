import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 py-12 space-y-20">

      {/* 1️⃣ Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full h-60 md:h-[300px]">
          <img
            src="https://media.istockphoto.com/id/1393546530/photo/chef-choosing-vegetables-for-dish.jpg?s=612x612&w=0&k=20&c=zgiOHR_61ROYOCQNd3zTpIFoNLib8Z-MdevHuDspbk4="
            alt="Cooking"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">About Us</h1>
          <p className="text-gray-300 leading-relaxed mb-4">
            Welcome to <span className="text-yellow-500 font-semibold">Our Recipe App</span> 🍲  
            A platform designed for food lovers who want to explore, share, and 
            enjoy recipes from around the world. Whether you’re a beginner or a pro, 
            we’ve got something special for you.
          </p>
          <Link to={`/Recipies`}>
          <button
          
           className="bg-yellow-500 text-black px-5 py-2 rounded-lg shadow hover:bg-yellow-600 transition">
            Explore Recipes
          </button>
          </Link>
        </div>
      </div>

      {/* 2️⃣ Mission & Vision */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Mission & Vision</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
          Our mission is to make cooking simple, fun, and inspiring for everyone.  
          We believe food is not just about taste, but about creating memories, 
          sharing love, and experiencing cultures.  
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Our vision is to build a global food community 🌍 where people can 
          discover recipes, share ideas, and connect through the joy of cooking.  
        </p>
      </div>

      {/* 3️⃣ Features / Team Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">👨‍🍳 Easy Recipes</h3>
            <p className="text-gray-300">
              Step-by-step instructions with simple ingredients so anyone can cook 
              delicious meals without hassle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">🌍 Global Dishes</h3>
            <p className="text-gray-300">
              Explore recipes from different cultures, bringing flavors from around 
              the world to your kitchen.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">💡 Share & Learn</h3>
            <p className="text-gray-300">
              Share your own recipes, get feedback, and learn from other passionate 
              foodies in the community.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
