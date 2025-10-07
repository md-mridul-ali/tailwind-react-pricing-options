import React, { use } from 'react';
import PricingCard from '../pricing-card/PricingCard';
import DaisyPricingCard from '../DaisyPricing/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    //load data
    const pricingData = use(pricingPromise);
    console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl mt-10 text-blue-600'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    //loaded data transfer to pricingCard component
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                } */}
                {/* show data using daisy card */}
                {
                    pricingData.map(pricing => <DaisyPricingCard
                        key={pricing.id}
                        pricing={pricing}
                    ></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;