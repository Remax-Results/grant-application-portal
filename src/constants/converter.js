import React from 'react';

const numberFormat = (value) => {

    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'narrowSymbol'
    }).format(value);
};

export default numberFormat;