import React from "react"
import ArticleModal from "./ArticleModal"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Article(user) {

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
              <p>{post.created_at.slice(0,10)}</p>
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
          <ArticleModal post={post} user={user}/>
        </div>
      ))}
    </>
  )
}

