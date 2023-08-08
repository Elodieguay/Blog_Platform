import React from "react"
import ArticleModal from "./ArticleModal"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Article(user) {

  console.log("c'est le console user : ", user);
  console.log("c'est le console user.auth de cardarticle : ",user.auth);
  console.log("c'est l'id de user.auth.id", user.auth.id);

  const xsrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN'))
    .split('=')[1];


  // Définir la valeur du cookie XSRF-TOKEN dans l'en-tête X-XSRF-TOKEN
  axios.defaults.headers.common['X-XSRF-TOKEN'] = xsrfToken;

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer les articles de l'utilisateur
    axios.get(`/api/posts?user_id=${user.auth.id}`)
        .then(response => {
            setUserPosts(response.data);
        })
        .catch(error => {
            console.error(error);
        });
  }, [user]);


  return (
    <>
      {userPosts.map((post) => (
        <div key={post.id} className="bg-slate-300 my-4 py-2 rounded-xl">
          <div className="flex my-2">
            <div className="w-3/4 ml-4">
              <h3>{post.title}</h3>
              <p>{user.auth.name}</p>
              <p>{post.created}</p>
              {post.content.length > 400 ? (
                <p>{post.content.slice(0, 250)}...</p>
              ) : (
                <p>{post.content}</p>
              )}
            </div>
            {/* <div className="w-1/4 mx-4 my-auto">
              <img src={post.images[0]} alt="" className="object-cover w-[150px] h-[150px]" />
            </div> */}
          </div>
          <button className="flex ml-4 mb-4 justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[100px]"
          >Lire l'article</button>
          <ArticleModal post={post} auth={user}/>
        </div>
      ))}
    </>
  )
}