import './styles.css';
import { ProductCardProps } from "./types";


function ProductCard ({name, price} : ProductCardProps) {
    return (
        <div className="product-card-container">
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        </div>
    )
}
    

export default ProductCard;