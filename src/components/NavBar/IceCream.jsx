import React  from 'react'
import s from './IceCream.module.css'
import icecream from './icecream.jpg'
const IceCream = () =>{
  return (      
    <div className = {s.icecream}>
      <h1>
        Ice Cream<br/>
        <p>
            Chocolate and Vanill
        </p>
      </h1>
        <p>
        Ice cream (derived from earlier cream ice)[1] is a sweetened frozen<br/>
        food typically eaten as a snack or dessert. It may be made from dairy milk <br/>
        or cream and is flavoured with a sweetener, either sugar or an alternative, <br/>
        and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.<br/>
        It can also be made by whisking a flavored cream base and liquid nitrogen together.<br/>
        Colorings are sometimes added, in addition to stabilizers. The mixture is cooled below <br/>
        the freezing point of water and stirred to incorporate air spaces and to prevent detectable <br/>
        ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low <br/>
        temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.
        </p>
        <img src = {icecream} alt = "macaroon" className = {s.icecream}></img>
    </div>
    )
}
export default IceCream