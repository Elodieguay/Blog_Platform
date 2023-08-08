import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head, Link } from '@inertiajs/react';
import CardArticle from '../Components/CardArticle';
import About from '@/Components/About';



export default function Dashboard({ auth }) {
    // console.log("C'est le console log auth de dashboard : ",auth);
    // console.log("C'est auth.user : ",auth.user);

    return (
        
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />


            <div className='flex'>
                <div className="w-3/4 ml-4" >
                    <CardArticle auth={auth.user}/>
                </div>
                <div className='w-1/6'></div>
                <div className="w-2/6 mx-4">
                    <About />
                </div>
            </div>
        </AuthenticatedLayout>

    );
}
