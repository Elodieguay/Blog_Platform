import React from "react"

export default function Article() {

  const fakeData = [
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
        <div key={index} className="bg-slate-300 my-4">
          <div className="flex my-2">
            <div className="w-3/4 ml-4">
              <h3>{data.title}</h3>
              <p>{data.author}</p>
              <p>{data.created}</p>
              <p>{data.content[0]}</p>
            </div>
            <div className="w-1/4 mx-4 my-auto">
              <img src={data.images[0]} alt="" className="object-cover w-[100px] h-[100px]" />
            </div>
          </div>
          <button className="ml-4">Lire l'article</button>
        </div>
      ))}
    </>
  )
}