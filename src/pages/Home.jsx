import React, { useEffect, useState } from 'react';
import MemeCard from '../components/Card';
import { getAllMeme } from '../api/index';


const Home=()=>{

    const [data, setData]= useState(null);

    useEffect(()=>{
        getAllMeme().then((e)=>setData(e.data.memes));
        console.log('hello');
    },[])

    return (
        <div className='row'>
            {data? <>{data.map(e=> <MemeCard title={e.name} url={e.url}/>)}</>:<>No Data</>}
        </div>
    )
}

export default Home;