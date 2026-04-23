import React from 'react';

const fetching = async () => {
    const res = await fetch("http://localhost:5000/models")
    return res.json()
}

const page = async ({params}) => {

    const {id} = await params
    const userData = await fetching()
    const data = userData.find(v => v.id === id)
    console.log(data)

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Id page: {data?.title}</h2>
        </div>
    );
};

export default page;