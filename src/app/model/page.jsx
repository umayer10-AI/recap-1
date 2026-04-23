import React from 'react';

const fetching = async () => {
    const res = await fetch("http://localhost:5000/models",{
        cache: "no-store"
    })
    return res.json()
}

const page = async () => {

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
        </div>
    );
};

export default page;