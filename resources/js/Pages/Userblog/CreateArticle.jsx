import React from 'react';
import { useState } from "react";
import axios from 'axios'
import { Head, Link } from '@inertiajs/react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


// import { usePage } from '@inertiajs/inertia-react';


const CreateArticle = () => {

    // const { props } = usePage();
    // const userId = props.id;
    const url = window.location.href;
    const urlParts = url.split('/'); // Sépare l'URL en parties basées sur le slash "/"
    const userId = urlParts[urlParts.length - 1]; // Récupère la dernière partie, qui devrait être l'ID
 
    console.log(userId); 

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [image, setImage] = useState(null);
    const [tag, setTag] = useState("")

  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
    const handleTagChange = (e) => {
        setTag(e.target.value);
    }
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };

    console.log(content);
    

  
    // const handleImageChange = (e) => {
    //   setImage(e.target.files[0]);
    // };
    
 

    const handleSubmit = (e) => {
        // On empêche le comportement par défaut de Submit
        e.preventDefault();
        // construction des datas du formulaire
        const formData = new FormData();
        formData.append('title', title);
        formData.append('tag', tag);
        formData.append('content', content);
        // formData.append({user_id})
        // formData.append('image', image);

        //  On réalise une request Post avec Axios
        axios({
            method : "post",
            url: "/posts",
            data: formData,
            // 'multipart/form-data' indique au serveur que vous envoyez des données binaires, telles que des fichiers, via un formulaire, et il est essentiel pour permettre le téléchargement de fichiers sur le serveur.
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {

            console.log("ca c'est response",response.data);

            // if (res.status === 200) {
            //     alert(resJson.message) // message de réussite envoyé par le back, affiché en alerte
            //     window.location.href = "/article"; // Après ajout dans la base, l'utilisateur est renvoyé sur la page login
            //   } else if (res.status === 400) {
            //     alert('invalid request, please try again');
            //   } else {
            //     alert("Erreur lors de la connexion");
            //   }

        })
        .catch((error) =>{
            console.log("ca c'est error",error);
            alert('we assume an issue, please try later')
        })
     


    };
  return (
    
    <>
      
         <Head title="Welcome" />
            <div className=" relative md:flex md:justify-center md:items-center min-h-screen">
               
                <div className="fixed md:top-0 md:left-0 p-6 ml-4 text-left font-presse md:text-6xl sm:text-3xl">
                    The Bloggers
                
                </div>
                <div className="fixed md:top-0 md:right-0 p-6 text-right text-base mt-5"> 
                <Link
                    href={route('dashboard')}
                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>
                </div>
   
                <div className=' flex text-6xl mr-4 font-presse mt-10  bg-red-200 pl-6'>Write an article</div>

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
                    <label htmlFor="tag" className="block font-medium mb-2">
                        Tag
                    </label>
                    <input
                        type="text"
                        id="tag"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        value={tag}
                        onChange={handleTagChange}
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="content" className="block font-medium mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        value={content}
                        onChange={handleContentChange}
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="image" className="block font-medium mb-2">
                        Image
                    </label>
                    {/* <input
                        type="file"
                        id="image"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        // onChange={handleImageChange}
                    /> */}
                    </div>
                    <button
                    
                    type="submit"
                    className=" bg-[#e62134]  hover:bg-lime-950  text-white font-medium py-2 px-4 rounded-md w-full"
                    >
                    Submit
                    </button>
                    <Link href={route('dashboard')}>
                        <button
                            className="my-4 bg-[#e62134]  hover:bg-lime-950  text-white font-medium py-2 px-4 rounded-md w-full"
                        >Revenir au dashboard</button>
                    </Link>
                </form>
            </div>
    </div>
  </>
   
  )
}

export default CreateArticle