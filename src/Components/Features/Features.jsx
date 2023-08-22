import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
const Features = ({feature}) => {
    return (
        <div className='flex pl-2 gap-2'>
            <span><CheckIcon className="h-6 w-6 text-blue-500" /></span><span>{feature}</span>
        </div>
    );
};

export default Features;