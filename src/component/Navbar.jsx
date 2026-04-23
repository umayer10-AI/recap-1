"use client"
import { authClient, signOut, useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const { 
        data: session, 
        isPending,
    } = authClient.useSession()

    if(isPending){
        return <h2>Loading....</h2>
    }
    console.log(session)

    const user = session?.user

    return (
        <div className='flex justify-between items-center px-10 py-4 bg-zinc-800'>
            <h2 className='text-2xl font-bold'>Navbar</h2>
            <ul className='flex items-center gap-5'>
                <Link href={'/'}>Home</Link>
                <Link href={'/model'}>Model</Link>
            </ul>
            <div>
                {
                    user? <>
                        <Button variant='danger-soft' onClick={() => signOut()}>Sign Out</Button>
                    </> : <div className='flex gap-2'>
                        <Link href={'/signup'}><Button>Register</Button></Link>
                        <Link href={'/signin'}><Button>Log in</Button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;