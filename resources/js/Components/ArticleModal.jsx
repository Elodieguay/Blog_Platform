import React from "react";
import { useState } from "react";

export default function ArticleModal(props) {
    let {post, user} = props;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    };

    const closeModal = () => {
        setIsOpen(false)
    };

    return (
        <div>
          <button
            className="flex ml-4 mb-4 justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[150px]"
            onClick={openModal}
          >
            Lire l'article
          </button>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="max-w-screen-2xl w-full   min-h-min max-h-[70vh] overflow-y-scroll rounded-2xl shadow-2xl">
                <div className="bg-slate-200 rounded-lg p-8 ">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-500 text-sm mb-2 font-bold">
                    {user.auth.name} - {post.created_at.slice(0,10)}
                  </p>
                  <p className="text-gray-500 text-sm mb-4 capitalize font-bold">#{post.tag}</p>
                  <p className="text-gray-800">{post.content}</p>
                  <button
                    className="flex ml-4 mb-4 mt-4 justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[150px]"
                    onClick={closeModal}
                  >
                    Fermer l'article
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}