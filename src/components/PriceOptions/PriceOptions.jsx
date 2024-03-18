import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const gymMemberships = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 50,
            "features": [
                "Access to gym facilities",
                "Limited group classes",
                "No personal training"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 80,
            "features": [
                "Access to gym facilities",
                "Unlimited group classes",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 120,
            "features": [
                "Access to gym facilities",
                "Unlimited group classes",
                "Personal training sessions included",
                "Access to sauna and spa"
            ]
        }
    ];



    return (
        <div className="lg:mt-10 mt-5">
            <h2 className="text-3xl font-semibold">Best Price Option</h2>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 lg:gap-6 md:gap-6">
                {
                    gymMemberships.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;