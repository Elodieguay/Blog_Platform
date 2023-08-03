import React from 'react';

export default function Article() {
    // Cette page sert pour l'affichage d'un article, la fonction article recevra en props les données issues de la table article

    const fakeData = {
        id: 1,
        author: "Guillaume PAGES",
        created: "03/08/2023",
        title: "Mon premier article",
        tag: ["#Travel", "#EcoFriendly"],
        content: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ut nobis perspiciatis saepe sapiente sequi nesciunt iure veritatis laborum illum! Magnam tenetur sunt alias odio corrupti dolorum aperiam, omnis reprehenderit error unde vero corporis praesentium exercitationem. Tenetur voluptatum optio blanditiis magnam. Quaerat dicta cumque obcaecati praesentium asperiores porro tenetur quas error accusantium, accusamus enim consectetur, expedita vel sequi, iusto esse laborum voluptatum doloribus. Maxime odio, expedita nam possimus earum sapiente autem quaerat beatae! Ea eveniet delectus quidem vero qui sed ipsa soluta laudantium. Distinctio qui quis dolorum veniam. Eligendi nobis consequuntur sed tempora itaque. Numquam blanditiis aliquid quos atque optio.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda temporibus cupiditate expedita ducimus, accusantium quia commodi iure officia laboriosam corporis sequi blanditiis adipisci? Quam commodi cupiditate repellendus itaque ut vero culpa. Pariatur minus commodi voluptate magnam veniam! Ratione, ipsa! Assumenda repellat expedita repellendus! Magnam reprehenderit esse id eaque sint excepturi quas pariatur at, nihil molestiae, nostrum maiores quia, ullam expedita magni quaerat. Perferendis accusamus dignissimos at veniam, id repellendus magnam ullam sed ad iste optio unde necessitatibus itaque beatae incidunt est quam placeat saepe vel. Aut pariatur odio, repellendus itaque aliquam saepe quo vitae ratione voluptatibus laborum minus possimus. Doloribus ea perspiciatis placeat pariatur cupiditate ad quasi debitis voluptatem a sint consequuntur, tempore harum ducimus minima distinctio culpa quaerat illo quia alias aspernatur! Ducimus sapiente necessitatibus, labore nostrum quos ex fugiat, illum cumque sunt a voluptate commodi, pariatur nulla animi distinctio. Nihil quia odio expedita sit ea facere asperiores.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas, laboriosam fugit sed tempora, itaque tempore fugiat ullam adipisci eos asperiores? Rerum esse veniam consequuntur nostrum officiis reiciendis laboriosam libero accusamus ipsum nisi laudantium, soluta repellat tenetur ab assumenda! Quibusdam pariatur cumque tempora nisi cum?"],
    }


    return (
        <>
            <article className="p-4 bg-white shadow-md rounded-md max-w-7xl mx-auto mt-4">
                <h2 className="text-xl font-bold">{fakeData.title}</h2>
                <p className="text-gray-500">{fakeData.author}</p>
                <p className="text-gray-500">{fakeData.created}</p>
                <p className="text-gray-500">
                    {fakeData.tag.map((tag) => (
                        <span key={tag}>{tag} </span>
                    ))}
                </p>
                <div className="mt-4">
                    {fakeData.content.map((content, index) => (
                        <React.Fragment key={content}>
                            <p>{content}</p>
                            {index !== fakeData.content.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </div>
            </article>
        </>
    )
}