import React from "react"

export default function Article() {

  const fakeData = [
    {
      id: 1,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon premier article",
      tag: ["#Travel", "#EcoFriendly"],
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime deserunt quaerat recusandae corporis. A mollitia adipisci repudiandae officiis quaerat maiores molestias ab minima, et libero provident vel illum, enim quo velit quisquam dolorem praesentium quae sunt ducimus voluptas! Voluptate deleniti adipisci dolore laboriosam eos aperiam corrupti delectus placeat amet! Voluptate accusantium commodi ipsam. Autem consequuntur assumenda voluptates rem qui molestias vel fuga sit non consectetur earum dolore optio reprehenderit ea dolores, aliquid ullam consequatur odio molestiae iste eveniet? Temporibus dolore, illum cumque nemo corporis possimus odit expedita voluptatum labore recusandae perspiciatis similique iste pariatur magni totam! Dolorum animi odit aliquam laboriosam, amet debitis error neque earum fugiat ex vero dolor minima esse a. Molestiae nemo voluptas, veritatis nisi aliquid nobis suscipit. Itaque voluptatibus rem possimus consequatur. Sunt ab numquam, eos hic voluptate tempore aliquam quos quo quod libero perferendis qui reprehenderit facere vitae laudantium nesciunt atque quibusdam tempora sed dicta illum natus fugit vel quasi. Debitis at architecto tempora sunt corporis praesentium nostrum, ea porro quidem animi aliquid cumque est ex recusandae aspernatur accusamus. Aut vitae, accusamus officiis eos magnam in, corrupti, tenetur maiores nisi assumenda sequi pariatur ratione quos ut voluptatem sed. Earum error vero ad architecto modi."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 2,
      author: "Guillaume PAGES",
      created: "04/08/2023",
      title: "Mon deuxième article",
      tag: ["#Travel", "#EcoFriendly", "#Food"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 3,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon troisième article",
      tag: ["#Travel", "#EcoFriendly", "#Holidays"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 1,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon premier article",
      tag: ["#Travel", "#EcoFriendly"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 2,
      author: "Guillaume PAGES",
      created: "04/08/2023",
      title: "Mon deuxième article",
      tag: ["#Travel", "#EcoFriendly", "#Food"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 3,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon troisième article",
      tag: ["#Travel", "#EcoFriendly", "#Holidays"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 1,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon premier article",
      tag: ["#Travel", "#EcoFriendly"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 2,
      author: "Guillaume PAGES",
      created: "04/08/2023",
      title: "Mon deuxième article",
      tag: ["#Travel", "#EcoFriendly", "#Food"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 3,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon troisième article",
      tag: ["#Travel", "#EcoFriendly", "#Holidays"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 1,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon premier article",
      tag: ["#Travel", "#EcoFriendly"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 2,
      author: "Guillaume PAGES",
      created: "04/08/2023",
      title: "Mon deuxième article",
      tag: ["#Travel", "#EcoFriendly", "#Food"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
    {
      id: 3,
      author: "Guillaume PAGES",
      created: "03/08/2023",
      title: "Mon troisième article",
      tag: ["#Travel", "#EcoFriendly", "#Holidays"],
      content: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos impedit quidem magnam mollitia reprehenderit incidunt quod, vero molestiae numquam, voluptatem exercitationem veniam tenetur labore?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, rerum adipisci accusantium molestias tempore commodi, in, molestiae magni error voluptatibus beatae nostrum ad aut fugit exercitationem quas. Earum, aut velit."],
      images: ['../images/image1.jpg', '../images/image2.jpg', '../images/image3.jpg', '../images/image4.jpg']
    },
  ]

  return (
    <>
      {fakeData.map((data, index) => (
        <div key={index} className="bg-slate-300 my-4 py-2 rounded-xl">
          <div className="flex my-2">
            <div className="w-3/4 ml-4">
              <h3>{data.title}</h3>
              <p>{data.author}</p>
              <p>{data.created}</p>
              {data.content[0].length > 400 ? (
                <p>{data.content[0].slice(0, 250)}...</p>
              ) : (
                <p>{data.content[0]}</p>
              )}
            </div>
            <div className="w-1/4 mx-4 my-auto">
              <img src={data.images[0]} alt="" className="object-cover w-[150px] h-[150px]" />
            </div>
          </div>
          <button className="flex ml-4 mb-4 justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[100px]"
          >Lire l'article</button>
        </div>
      ))}
    </>
  )
}