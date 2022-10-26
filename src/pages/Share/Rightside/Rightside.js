import React from 'react';
import './Rightside.css'
import { useLoaderData } from 'react-router-dom';

import ShowAll from '../../../Showsdata/ShowAll/ShowAll';


const Rightside = () => {
    const data = useLoaderData();
    // console.log(data)

    return (
       <div className='shop-container'>
            <div className='products-container'>
{
    data.map(datas => <ShowAll
    key={datas.id}
    datas={datas}
    ></ShowAll>)
}
            </div>
       </div>
    );
};

export default Rightside;



