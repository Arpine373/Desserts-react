import React  from 'react'
import s from './MainCakes.module.css'
import macaroon from './macaroons.jpg'
const MainCakes = () =>{
  return (      
    <div className = {s.main}>
      <h1>
        Main Cakes<br/>
        <p>
        Macaroons
        </p>
      </h1>
        <p>
        The macaron is traditionally held to have been introduced in France<br/>
        by the Italian chef of queen Catherine de Medici during the Renaissance.<br/>
        Since the 19th century, a typical Parisian-style macaron is presented with a ganache,<br/>
        buttercream or jam filling sandwiched between two such cookies, akin to a sandwich cookie.<br/>
        The confection is characterized by a smooth squared top, a ruffled circumference—referred<br/>
        to as the "crown" or "foot" (or "pied")—and a flat base. It is mildly moist and easily melts<br/>
        in the mouth. Macarons can be found in a wide variety of flavours that range from traditional<br/>
        (raspberry, chocolate) to unusual (foie gras, matcha)
        </p>
        <img src = {macaroon} alt = "macaroon" className = {s.macaroon}></img>
    </div>
    )
}
export default MainCakes