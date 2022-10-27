import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Leftside = () => {
    const data = useLoaderData();
    // const {title,id} = data;
    // console.log(data.id);
    return (
        <div>
            
            {
                data.map(d => <Link key={d.id} to={`/allnews/${d.category_id}`} style={{textDecoration:'none',color:'gray',text:'' }}><p>{d.title}</p></Link>)
            }
        </div>
    );
};

export default Leftside;