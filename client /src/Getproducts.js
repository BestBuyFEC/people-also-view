import React, {useEffect, useState} from "react";
import StarRating from "./stars";

function Getproduct() {
    const [product, setproduct] = useState(null)
    
    useEffect(() => {
        getlist()
    },[])

    const getlist = () => {
        fetch('http://localhost:3025/api/product')
        .then(res => res.json())
        .then(data => setproduct(data))
        .catch(error => console.log(error))
    }
    return (
        <div>
        {product ? product.map((list) => ( 
            <div>
                <img src={list.img}></img>
            <p key={list.productid}> {list.name}-{list.description}</p>
            <p>${list.price}</p>
            <StarRating/>
            <button value={list.productid}>Compare</button>
            </div>
        )): null}
        </div>
    )
}
export default Getproduct