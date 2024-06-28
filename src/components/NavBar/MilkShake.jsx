import React  from 'react'
import s from './MilkShake.module.css'
import milkshake from './milkshake.jpg'
const MilkShake = () =>{
  return (      
    <div className = {s.milkshake}>
      <h1>
        Milkshake<br/>
        <p>
            Strawberry milkshake
        </p>
      </h1>
        <p>
        A milkshake (sometimes simply called a shake) is a sweet drink made by blending milk,<br/>
        ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup,<br/>
        fruit syrup, or whole fruit into a thick, sweet, cold mixture. It may also be made using a base<br/>
        made from non-dairy products, including plant milks such as almond milk, coconut milk, or soy milk.<br/>
        Milkshakes originated in the United States around the turn of the 20th century, and grew in popularity <br/>
        following the introduction of electric blenders in the subsequent two decades. They became a common part of <br/>
        youth popular culture, as ice cream shops were a culturally acceptable meeting place for youth, and milkshakes became<br/>
        symbolic of the innocence of youth.
        </p>
        <img src = {milkshake} alt = "milkshake" className = {s.milkshake}></img>
    </div>
    )
}
export default MilkShake