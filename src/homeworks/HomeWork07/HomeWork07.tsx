import { products } from "./data";
import ProductCard from "../../components/Product/ProductCard";
import './styles.css'

function HomeWork07 () {
    const productCards = products.map((product) => {
        return <ProductCard 
        name={product.name}
        price={product.price}
        />
    })

    return (
    <div className="product-wrapper">
    {productCards}
    </div>
    )
}

export default HomeWork07;