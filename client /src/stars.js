import React from "react";
import { FaStar } from "react-icons/fa"

const StarRating = () => {
    return (<div className="mtcStarContainer">
        {[...Array(5)].map(star =>{
            return <FaStar size={15} color="yellow" />;
        })}
    </div>
    );
};

export default StarRating
