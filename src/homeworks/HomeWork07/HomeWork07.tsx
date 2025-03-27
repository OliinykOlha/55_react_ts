import { products } from "./data";
import ProductCard from "../../components/Product/ProductCard";
import './styles.css'
import { v4 } from "uuid";
import { Product } from "./types";


function HomeWork07 () {
    const productCards = products.map((product: Product) => {
        return <ProductCard
        key={v4()}
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