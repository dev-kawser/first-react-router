/* eslint-disable react/prop-types */

const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className="bg-blue-300 flex flex-col rounded-xl p-5 space-y-5">
            <h2 className="text-center">
                <span className="text-5xl font-black">{price}$</span>
                <span className="text-5xl font-semibold">/mon</span>
            </h2>
            <h4 className="text-3xl font-semibold flex-grow">{name}</h4>

            {
                features.map((feature, idx) => <li key={idx}>{feature}</li>)
            }

            <button className="bg-blue-500 py-2 w-full rounded-lg text-white font-bold hover:bg-blue-900">Get Now</button>
        </div>
    );
};

export default PriceOption;