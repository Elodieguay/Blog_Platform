
import React from "react";

export default function About(user) {


  return (
    <>
      <div className="flex-col bg-red-200 rounded-lg shadow-lg my-4 py-2 text-center">
        <span className="text-2xl">About</span>
        <div className="text-center">
          <img
            src={user.user.image}
            className="mx-auto mb-4 w-32 rounded-lg"
            alt="Avatar" />
          <h5 className="mb-2 text-xl font-medium leading-tight">{user.user.name} </h5>
          <p className="my-2 text-neutral-500 dark:text-neutral-400">{user.user.job} </p>
          <p className="mx-auto mb-4 mt-0 font-light leading-relaxed w-64"> {user.user.bio}</p>
        </div>
      </div>
    </>

  )
}