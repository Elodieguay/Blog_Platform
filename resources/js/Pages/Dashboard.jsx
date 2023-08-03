import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import CardArticle from '../Components/CardArticle';


export default function Dashboard({ auth }) {
    console.log(auth);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <CardArticle />

        </AuthenticatedLayout>
    );
}
