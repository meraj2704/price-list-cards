import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    // set a state for collect data from json file
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
                // call price card function for show the all data about card
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