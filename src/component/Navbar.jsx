import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-4 bg-zinc-800'>
            <h2 className='text-2xl font-bold'>Navbar</h2>
            <ul className='flex items-center gap-5'>
                <Link href={'/'}>Home</Link>
                <Link href={'/model'}>Model</Link>
            </ul>
        </div>
    );
};

export default Navbar;