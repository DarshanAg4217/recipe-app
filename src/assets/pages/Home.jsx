import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Navbar */}
    
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-20 gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold leading-snug">
            Discover & Cook <br /> 
            <span className="text-yellow-400">Tasty Recipes</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Explore hundreds of easy-to-make recipes curated by top chefs. 
            From quick snacks to gourmet meals, we’ve got it all!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg"
          >
            Explore Recipes
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Food Dish"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Ring animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-80 h-80 rounded-full border-2 border-yellow-500 opacity-40"
          />
        </motion.div>
      </div>

      {/* Categories Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {["Salads", "Drinks", "Foods"].map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-gray-700 rounded-xl p-8 text-center shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{cat}</h3>
            <p className="text-gray-300 mt-2">Delicious {cat} Recipes</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-10 py-16 text-center"
      >
        <h2 className="text-4xl font-bold">500+ Food Recipes</h2>
        <p className="mt-4 text-gray-300">Enjoy a wide collection of recipes loved by foodies worldwide</p>
      </motion.div>
    </div>
  )
}

export default Home
