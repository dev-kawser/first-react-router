/* eslint-disable react/prop-types */

const Link = ({ route }) => {
    return (
        <>
            <li className="mr-10 p-1 font-semibold rounded-md hover:duration-1000 hover:bg-blue-700 hover:text-white">
                <a href={route.path}>{route.name}</a>
            </li>
        </>
    );
};

export default Link;