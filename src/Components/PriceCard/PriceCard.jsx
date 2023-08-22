import React from 'react';

const PriceCard = (props) => {
    const priceProduct = props.price
    const {name,price,image_url} = priceProduct;
    return (
        <div className='w-3/4 md:w-3/4 bg-slate-100 rounded p-2 mx-auto'>
            <img className='h-1/2 w-full md:h-4/5 rounded' src={image_url} alt="" />
            <div className='flex justify-between p-4 pt-8'>
                <h1 className='text-2xl md:text-4xl font-bold'>{name}</h1>
                <p className='text-xl md:text-2xl font-bold'>Price : {price}$</p>
            </div>
        </div>
    );
};

export default PriceCard;