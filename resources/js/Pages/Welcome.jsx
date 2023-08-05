import { Link, Head } from '@inertiajs/react';
import React from 'react';
import bike3 from '../Assets/bike3.png'
import Masonrys from '@/Components/Masonrys';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className=" fixed sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center mb-4 bg-white dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
               
                <div className="sm:fixed sm:top-0 sm:left-0 p-6 ml-4 text-left font-presse text-6xl">
                    The Bloggers
                </div>
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right text-base mt-5">
                    <Link 
                        href={route('createblog')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        CREATE AN ARTICLE
                    </Link>
                    <Link 
                        href={route('blog')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Blog
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
            <div className='w-full min-h-screen '>

                <div className=" grid grid-cols-3 gap-4  min-w-full mx-auto p-6 lg:p-8 mt-20 ">
                    <div className="col-span-2 ">
                        <img src={bike3} alt="Bike" className="w-full h-auto" />
                    </div>
                    <div className="col-span-1 flex justify-center float-left items-center ">
                        <h1 className=' text-7xl  uppercase font-presse   sm:-ml-16   '>Create your own stories</h1>
                            {/* <p className=' border-spacing-10'>Sign up Now </p> */}
                    </div>
                </div>
                <div  className=' max-w-7xl h-20 z-[100] py-10 m-auto '>
                    <h1 className='  w-1/2 uppercase  text-6xl tracking-normal font-presse ml-12 m-5 mb-32  '>The Best Recent Articles </h1>
                </div>
                <div className=' max-w-full flex relative min-h-screen items-center justify-center mx-auto  mt-60'>
                    <Masonrys/>
                </div>
            </div> 
            </div>       

                
           
        </>
    );
}
