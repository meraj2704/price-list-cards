import React from 'react';

const Link = ({route}) => {
    return (
        // here we add our navbar link
        <li className='mr-5 hover:bg-purple-600'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;