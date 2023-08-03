import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Article() {
    // Cette page sert pour l'affichage d'un article, la fonction article recevra en props 
    // les données issues du composant article de la page dashboard de la table article.

    const fakeData = {
        id: 1,
        author: "Guillaume PAGES",
        created: "03/08/2023",
        title: "Mon premier article",
        tag: ["#Travel", "#EcoFriendly"],
        content: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ut nobis perspiciatis saepe sapiente sequi nesciunt iure veritatis laborum illum! Magnam tenetur sunt alias odio corrupti dolorum aperiam, omnis reprehenderit error unde vero corporis praesentium exercitationem. Tenetur voluptatum optio blanditiis magnam. Quaerat dicta cumque obcaecati praesentium asperiores porro tenetur quas error accusantium, accusamus enim consectetur, expedita vel sequi, iusto esse laborum voluptatum doloribus. Maxime odio, expedita nam possimus earum sapiente autem quaerat beatae! Ea eveniet delectus quidem vero qui sed ipsa soluta laudantium. Distinctio qui quis dolorum veniam. Eligendi nobis consequuntur sed tempora itaque. Numquam blanditiis aliquid quos atque optio.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda temporibus cupiditate expedita ducimus, accusantium quia commodi iure officia laboriosam corporis sequi blanditiis adipisci? Quam commodi cupiditate repellendus itaque ut vero culpa. Pariatur minus commodi voluptate magnam veniam! Ratione, ipsa! Assumenda repellat expedita repellendus! Magnam reprehenderit esse id eaque sint excepturi quas pariatur at, nihil molestiae, nostrum maiores quia, ullam expedita magni quaerat. Perferendis accusamus dignissimos at veniam, id repellendus magnam ullam sed ad iste optio unde necessitatibus itaque beatae incidunt est quam placeat saepe vel. Aut pariatur odio, repellendus itaque aliquam saepe quo vitae ratione voluptatibus laborum minus possimus. Doloribus ea perspiciatis placeat pariatur cupiditate ad quasi debitis voluptatem a sint consequuntur, tempore harum ducimus minima distinctio culpa quaerat illo quia alias aspernatur! Ducimus sapiente necessitatibus, labore nostrum quos ex fugiat, illum cumque sunt a voluptate commodi, pariatur nulla animi distinctio. Nihil quia odio expedita sit ea facere asperiores.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas, laboriosam fugit sed tempora, itaque tempore fugiat ullam adipisci eos asperiores? Rerum esse veniam consequuntur nostrum officiis reiciendis laboriosam libero accusamus ipsum nisi laudantium, soluta repellat tenetur ab assumenda! Quibusdam pariatur cumque tempora nisi cum?",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias similique totam quas, earum harum at cumque minus mollitia incidunt reprehenderit! Saepe, sapiente molestiae repellendus aliquid harum iste pariatur quisquam nulla ducimus est? Sunt et voluptatem enim officiis, ipsa explicabo veritatis voluptatum eos aliquam, inventore eius impedit, optio ea possimus id sint voluptate placeat accusamus quae non blanditiis quasi? Cum eos magni provident! Nobis, ea repellat veniam voluptatum tempora quas alias ad odio ex commodi est quos amet atque molestiae molestias vel quaerat, blanditiis iusto laborum illo quia harum dignissimos nisi deleniti! Quidem consectetur, placeat necessitatibus commodi, aspernatur illum debitis nam doloremque modi vel totam sapiente, beatae atque nisi aliquam voluptas id explicabo officia? Doloribus eligendi atque dolorum esse iste amet, molestias doloremque. Vero id quis explicabo deserunt error aspernatur odio consectetur enim dolorem pariatur numquam iure tenetur nulla placeat voluptas culpa sapiente, velit delectus itaque tempore. Cupiditate doloribus deserunt vero deleniti beatae accusantium voluptatibus aspernatur? Necessitatibus accusantium eum distinctio cum tenetur quo error dignissimos, explicabo doloremque corrupti vero tempora commodi recusandae tempore placeat facere architecto modi fuga repudiandae perferendis dolorum. Eveniet magni deserunt, voluptate delectus mollitia incidunt vitae commodi error quae blanditiis perferendis doloribus quas velit ducimus atque. Labore, saepe!"
        ], 
        image: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    }

    return (
        <>
            <article className="p-4 bg-slate-300 shadow-md rounded-md max-w-7xl mx-auto mt-4 mb-6">
                <h2 className="text-xl font-bold">{fakeData.title}</h2>
                <p className="text-gray-500">{fakeData.author}</p>
                <p className="text-gray-500">{fakeData.created}</p>
                <p className="text-gray-500">
                    {/* Ce code permet de boucler sur la clé tag du fakeData afin d'afficher tous les tags. */}
                    {fakeData.tag.map((tag) => (
                        <span key={tag}>{tag} </span>
                    ))}
                </p>
                <div className="mt-4">
                    {/* Ce code permet de boucler sur la clé content du fakeData afin d'afficher tous les paragraphes.
                    S'il y a qu'un seul paragrapge ça marche comme s'il y en a 40 et le .length - 1 permet de ne pas 
                    mettre un retour à la ligne pour le dernier paragraphe vu que c'est inutile. */}
                    {fakeData.content.map((content, index) => (
                        <React.Fragment key={content}>
                            <p>{content}</p>
                            {index !== fakeData.content.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </div>
                {/* Ici il y a condition ternaire soit le tableau d'image fait plus de 3 images et on passe sur un carroussel,
                soit le tableau fait moins de 3 images et on a un affichage classique */}
                {fakeData.image.length > 3 ? (
                <div className="my-4 flex justify-center h-[400px]">
                    <Slider slidesToShow={1} slidesToScroll={1} dots={true} className='max-w-[400px]'>
                        {fakeData.image.map((image, index) => (
                            <div key={index} className="mx-1 h-[400px]">
                                <img src={image} alt="" className="max-w-[300px] mx-auto my-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
                ) : (
                    <div className="flex">
                        {fakeData.image.map((image, index) => (
                            <img key={index} src={image} alt="" className="max-w-[400px] mx-1" />
                        ))}
                    </div>
                )}
            </article>
        </>
    )
}