import React from 'react';
import Features from '../Features/Features';

const PriceCard = (props) => {
    const priceProduct = props.price
    const {name,price,image_url} = priceProduct || {};
    return (
        <div className='w-3/4 md:w-3/4 bg-slate-100 rounded p-2 mx-auto flex flex-col'>
            <img className='h-1/2 w-full md:h-4/6 rounded' src={image_url} alt="" />
            <div className='flex justify-between p-4 '>
                <h1 className='text-2xl md:text-4xl font-bold'>{name}</h1>
                <p className='text-xl md:text-2xl font-bold'>Price : {price}$</p>
            </div>
            <div className='pl-4'>
                <h1>Features: </h1>
                {
                    priceProduct.features.map((feature, ind)=> <Features
                    key={ind}
                    feature={feature}
                    ></Features>)
                }
            </div>
            <button className='w-full bg-green-500 py-4 hover:bg-green-700 rounded-lg text-xl mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;