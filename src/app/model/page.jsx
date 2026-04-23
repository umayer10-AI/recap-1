import React from 'react';

const fetching = async () => {
    const res = await fetch("http://localhost:5000/models")
    return res.json()
}

const page = async () => {

    const data = await fetching()
    console.log(data)

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Model page: {data.length}</h2>
        </div>
    );
};

export default page;