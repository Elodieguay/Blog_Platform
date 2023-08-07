
import Dashboard from "@/Pages/Dashboard";
import React from "react";
// import { StyleSheet , Text, View} from "react-native";



export default function About(props) {
 const fakeData = {
   id: 1,
   name:"jake",
   title:"prof",
   description:"hjhgcfhjhjjk",
   image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb"
 }

  return (
    


    
    <>
    
    <div className="flex-col">
        About
     
    

      <div className="text-center">
  <img
    src= {fakeData.image} 
    className="mx-auto mb-4 w-32 rounded-lg"
    alt="Avatar" />
  <h5 className="mb-2 text-xl font-medium leading-tight">{fakeData.name} </h5>
  <p className="text-neutral-500 dark:text-neutral-400">{fakeData.title} </p>

  
</div>


<p className="mb-4 mt-0 text-base font-light leading-relaxed"> {fakeData.description}

</p>
  
    </div>
    
    
    </>

  )
}


// about communique avec userdashboard notament pour les props
// }
