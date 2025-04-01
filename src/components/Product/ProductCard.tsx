import { useEffect } from 'react';
import './styles.css';
import { ProductCardProps } from "./types";


function Product ({name, price} : ProductCardProps) {
    // Unmounting
useEffect(() => {
    return () => {
        console.log('Component will unmount');
        
    }
}, []) 

    return (
        <div className="product-card-container">
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        </div>
    )
}
    

export default Product;