import Carts from '@/component/Carts';
import Toastify from '@/component/Toastify';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const fetching = async () => {
    const res = await fetch("http://localhost:4000/models",{
        cache: "no-store"
    })
    return res.json()
}

const page = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user

    if(!user){
        redirect('/signin')
    }

    const data = await fetching()
    console.log(data)

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Model page: {data.length}</h2>
            
            {
                data.map(v => (
                    <div key={v.id}>
                        <h2>{v.title}</h2>
                    </div>
                ))
            }

            <Toastify></Toastify>

            <Carts></Carts>

        </div>
    );
};

export default page;