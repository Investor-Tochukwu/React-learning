export default function ProductCard2 ( {name, price, inStock, onAddToCart} ) {

    return (
        <div className = "Product-card">

            <h2>{name}</h2>

            <p> Price: ${price}</p>

            <p> {inStock ? "In Stock" : "Out of Stock"} </p>

            <button onClick={ () => onAddToCart(name)}
                 disabled={!inStock} >
                Add
            </button>
        
        </div>
    );
}
