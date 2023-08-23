import React from 'react';

export default function introCard1({img, text}) {
    return (
        <div>
            <img src={img} alt={text}/>
            {text}card
        </div>
    );
}

