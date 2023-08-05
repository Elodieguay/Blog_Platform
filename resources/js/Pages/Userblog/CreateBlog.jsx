import React from 'react';
import { useState } from "react";
import axios from 'axios'

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
    
 

    const handleSubmit = (e) => {
        // On empêche le comportement par défaut de Submit
        e.preventDefault();
        // construction des datas du formulaire
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        //  On réalise une request Post avec Axios
        axios({
            method : "post",
            url: "api/post",
            data: formData,
            // 'multipart/form-data' indique au serveur que vous envoyez des données binaires, telles que des fichiers, via un formulaire, et il est essentiel pour permettre le téléchargement de fichiers sur le serveur.
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {

            console.log(response.data);

            if (res.status === 200) {
                // alert(resJson.message) // message de réussite envoyé par le back, affiché en alerte
                window.location.href = "/article"; // Après ajout dans la base, l'utilisateur est renvoyé sur la page login
              } else if (res.status === 400) {
                alert('invalid request, please try again');
              } else {
                alert("Erreur lors de la connexion");
              }

        })
        .catch((error) =>{
            console.log(error);
            alert('we assume an issue, please try later')
        })
     


    };
  return (
    
    <>
     {/* <header className=' w-full h-20 items-center justify-between bg-cyan-800  bg-opacity-40  text-gray-900 '>
        <div className="ml-4 text-xl">THE BLOGGERS</div>
        <div className="mr-4">Blog</div>
     </header>         */}
     <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-white" >
        <div className='text-6xl mr-4 font-presse mt-10  pl-6'>Write an article</div>

        <div className="container mx-auto p-4 w-2/3 mt-8">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="title" className="block font-medium mb-2">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    value={title}
                    onChange={handleTitleChange}
                />
                </div>

                <div className="mb-4">
                <label htmlFor="description" className="block font-medium mb-2">
                    Description
                </label>
                <textarea
                    id="description"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                </div>

                <div className="mb-4">
                <label htmlFor="image" className="block font-medium mb-2">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    onChange={handleImageChange}
                />
                </div>

                <button
                type="submit"
                className=" bg-[#e62134]  hover:bg-lime-950  text-white font-medium py-2 px-4 rounded-md w-full"
                >
                Submit
                </button>
            </form>
        </div>
    </div>
    
    </>
   
  )
}

export default CreateBlog