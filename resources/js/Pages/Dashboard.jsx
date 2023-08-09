import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head, Link } from '@inertiajs/react';
import CardArticle from '../Components/CardArticle';
import About from '@/Components/About';
import {GrAddCircle} from 'react-icons/gr';





export default function Dashboard({ auth }) {
    console.log(auth);
    const { name, id} = auth.user
    console.log(id);
    return (
        
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Hi {name}! This is your Blog</h2>}
        >
            <Head title="Dashboard" />
            <div>
                
                <div className='flex  grid-cols-2 border-2 rounded-sm  font-presse  text-5xl m-32 justify-center text-center'>
                    <p> Create an article 
                    <Link 
                        href={'createarticle'}
                        ><GrAddCircle/>
                    </Link> 
                  
                    </p> 
                    
                </div>
                <div className='flex border-r-2'>
                    <div className="w-3/4 ml-4" >
                        <CardArticle/>
                    </div>
                    <div className='w-1/6'></div>
                    <div className="w-2/6 mx-4">
                        <About user={auth.user}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
}
