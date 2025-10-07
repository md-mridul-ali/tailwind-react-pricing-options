import React, { use } from 'react';
import PricingCard from '../pricing-card/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    //load data
    const pricingData = use(pricingPromise);
    console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    //loaded data transfer to pricingCard component
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;