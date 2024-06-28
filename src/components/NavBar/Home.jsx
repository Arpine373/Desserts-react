import React  from 'react'
import s from './Home.module.css'
import heart from './heart.jpg'
const Home = () =>{
  return (      
    <div className = {s.home}>
      <h1>
        About our cakes
      </h1>
        <p>
        Our classic treats are made daily by in-house bakers,<br/>
        using the freshest  finest ingredients. Come visit us for delicious,<br/>
        sentimental sweets and a friendly, old-fashioned neighborhood experience.<br/>
        If you are looking for the best Cake Recipes on the internet you have come to the right place.<br/>
        You will find the best Chocolate Cake, White Cake, Red Velvet Cake, Carrot Cake, Naked Cake,<br/>
        Zucchini Cake, Birthday Cake, and Pound Cake recipes, just to name a few! These recipes<br/>
        have been tried, tested, and perfected.<br/>
        I love to share every detail of the baking process with you and believe that no detail is unimportant.<br/>
         When it comes to baking cakes, there are a few general rules that making the process easier and will help to ensure perfect results.
        </p>
        <img src = {heart} alt = "heart" className = {s.picture}></img>
    </div>
    )
}
export default Home