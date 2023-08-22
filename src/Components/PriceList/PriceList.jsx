import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(()=>{
        fetch('priceList.json')
        .then(res=> res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div>
            <div className='md:grid md:grid-cols-3 gap-3 mx-auto'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price ={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;