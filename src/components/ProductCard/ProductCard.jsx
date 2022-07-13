const ProductCard = ({ product }) => {
    return(
        <div className="ProductContainer">
            {product.bestseller &&
                <div className="BestSellerContainer">
                    <p>Best Seller</p>
                </div>
            }
            <img src={product.image.src} alt={product.image.alt} />
            <button className="ButtonProductCard">ADD TO CART</button>
            <h5 className="ProductInfoGrey">{product.category}</h5>
            <h4 className="ProductInfo">{product.name}</h4>
            <h5 className="ProductInfoGrey">{product.price} €</h5>
        </div>
    )
}

export default ProductCard