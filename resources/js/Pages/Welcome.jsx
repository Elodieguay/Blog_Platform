import { Link, Head } from '@inertiajs/react';
import React from 'react';
import bike from '../Assets/bike.png'
// import Masonrys from '@/Components/Masonrys';
import { useState, useEffect } from 'react';
import Carte from '@/Components/Carte';


export default function Welcome({ auth, posts}) {

    
    console.log('Welcome component loaded.')
        const [data, setData] = useState({posts:[]});
      
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          try {
            const response = await fetch('/posts');
      
            const jsonData = await response.json();
      
            console.log(jsonData);
            setData(jsonData);

          } catch (error) {
            console.log("Error:", error);
          }
        };

      
      

    return (
        <>
            <Head title="Welcome" />
            <div className=" relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center mb-4 bg-white dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
               
                <div className="sm:fixed sm:top-0 sm:left-0 p-6 ml-4 text-left font-presse text-6xl">
                    The Bloggers
                </div>
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right text-base mt-5">
                    <Link 
                        href={route('createarticle')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        CREATE AN ARTICLE
                    </Link>
                    
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            <div className='w-full  h-screen '>

                <div className=" grid grid-cols-3 gap-4  min-w-full mx-auto p-6 lg:p-8 mt-20 ">
                    <div className="col-span-2 ">
                        <img src={bike} alt="Bike" className="w-full h-auto" />
                    </div>
                    <div className="col-span-1 flex justify-center float-left items-center ">
                        <h1 className=' text-7xl  uppercase font-presse      '>Create your own stories</h1>
                    </div>
                </div>
                <div  className=' max-w-7xl h-20 z-[100] py-10 m-auto '>
                    <h1 className='  w-1/2 uppercase  text-6xl tracking-normal font-presse ml-12 m-5 mb-32  '>The Best Recent Articles </h1>
                </div>
                <div className='  w-3/4 flex 
                 min-h-screen items-center justify-center mx-auto  mt-60'>
                    {data.posts.length > 0  ? (
                        data.posts.map((items) => (                                  
                                        <Carte key={items.id} title={items.title} description={items.description} id={items.id}/>
                                
                        ))
                            ): (
                        
                                <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>

                    )}                    
                </div>
            </div> 
            </div>       

                
           
        </>
        );
}
