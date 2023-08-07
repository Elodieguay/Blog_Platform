// import { Link } from '@inertiajs/react';
import React from 'react'
import street from '../Assets/street.jpg'





export default function Carte({id, title, description}) {


  return (
    <div key={id} className="flex flex-col items-center p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <p><img src={street}/></p>
    </div>
    
    // <div className="grid">
    //   <div className="grid__item" >
    //     <div className="card"><img className="card__img" src={street}/>
    //       <div className="card__content">
    //         <Link href={{pathname:(`/article/${id}`), query: {id}}}>
    //         <h1 className="card__header">{title}</h1>
    //         </Link>
    //         <p className="card__text">{description}</p>
    //         <button className="card__btn">Read more <span>&rarr;</span></button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  );
}