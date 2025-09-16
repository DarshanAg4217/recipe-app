import { createContext, useState } from "react"

export const recipecontext = createContext(null)

const RecipeContext = (props) => {
    const [data, setData] = useState( [
  {
    id: "1",
    url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
    title: "Paneer Butter Masala",
    Chef: "Chef Arjun",
    description: "Rich and creamy paneer curry cooked in tomato and cashew gravy.",
    ingredient: "Paneer, Butter, Tomato, Cashew, Cream, Spices",
    instructions: "Heat butter, Add onion-tomato paste, Add spices, Add paneer, Simmer with cream",
    category: "Dinner",
  },
  {
    id: "2",
    url: "https://www.tasteofhome.com/wp-content/uploads/2018/05/Garden-Fresh-Grilled-Veggie-Pizza_EXPS_SDJJ18_215090_B02_13_3b-2.jpg",
    title: "Veggie Pizza",
    Chef: "Chef Sneha",
    description: "Crispy crust topped with cheese, tomato sauce, and fresh vegetables.",
    ingredient: "Pizza Base, Cheese, Tomato Sauce, Onion, Capsicum, Olives",
    instructions: "Spread sauce, Add toppings, Add cheese, Bake in oven for 15 mins",
    category: "Snack",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Mango Smoothie",
    Chef: "Chef Karan",
    description: "Refreshing summer drink made with mangoes, milk, and ice cubes.",
    ingredient: "Mango, Milk, Sugar, Ice Cubes",
    instructions: "Peel mango, Blend with milk & sugar, Add ice cubes, Serve chilled",
    category: "Beverage",
  },
]
)
    console.log(data)
  return (
    <div>
      <recipecontext.Provider value={{data,setData}}>
            {props.children}
      </recipecontext.Provider>
    </div>
  )
}

export default RecipeContext
