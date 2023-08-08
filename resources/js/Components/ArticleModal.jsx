import React from "react";
import { useState } from "react";

export default function ArticleModal(post, auth) {

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
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Open Modal
          </button>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-2">
                  {auth.user.name} - {post.created_at}
                </p>
                <p className="text-gray-500 text-sm mb-4">{tag}</p>
                <p className="text-gray-800">{post.content}</p>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
                  onClick={closeModal}
                >
                  Close Modal
                </button>
              </div>
            </div>
          )}
        </div>
      );
}