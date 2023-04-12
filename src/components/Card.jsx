import React from "react";
import CardCiudades  from "../Data";
import "./Card.css"



// function MostrarTarjetas() {
//   let Card = "";


//     CardCiudades.forEach(item, index => {



//       Card += <div>
//         <img key={index} src={item.imagen} alt="nombre"/> 
//         <h2 key={index} >{item.titulo}</h2>
//         <h3 key={index}>{item.descripcionPrin}</h3>
//         <p key={index}>{item.descrpcionSec}</p>
//       </div>;


//     }
//   )
//   return Card
// }
    


const MostrarTarjetas = () => {
  const list = [];

  CardCiudades.forEach((item,) => {
    list.push(
      <section className="cont">
          <article className="cardcont">
              <div key={CardCiudades.id} className="card">
                <img className="imgcard" src={item.imagen} alt={"imagen " + item.titulo}></img>
                <div className="conttext">
                <h2>{item.titulo}</h2>
                <h3>{item.descripcionPrin}</h3>
                </div>
              </div>
          </article>
      </section>
    );
  });

  return list;
};


export default MostrarTarjetas

