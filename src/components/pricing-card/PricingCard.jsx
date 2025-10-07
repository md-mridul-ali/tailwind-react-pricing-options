import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    console.log(pricing);
    // distructuring data from pricing
    const {name, price, description, features} = pricing
    return (
        <div className='border p-4 bg-amber-200 rounded-2xl'>
            {/* card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h3 className='text-3xl'>{price}</h3>
            </div>
            {/* card body */}
            <div className='bg-amber-300 p-4 rounded-xl mt-5'>
                <p>{description}</p>
                {
                    //data transfer to PricingFeature component
                    features.map((feature, index) => <PricingFeature
                    key={index}
                    feature={feature}></PricingFeature> )
                }
            </div>
        </div>
    );
};

export default PricingCard;