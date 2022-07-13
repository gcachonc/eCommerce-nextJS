import {loadFeaturedProduct} from "../../lib/ApiRequest.js"

const FeaturedCard = ({ featuredProduct }) => {
    return(
        <div className="FeaturedCardContainer">
            <div className="FeaturedCardFirstRow">
                <h3 className="FeaturedCardTittle">{featuredProduct.name}</h3>
                <button className="FeaturedCardButton">ADD TO CART</button>
            </div>
            <div className="FeaturedCardImgContainer">
                <img src={featuredProduct.image.src} alt={featuredProduct.image.alt}/>
            </div>
            <div className="FeaturedCardDescriptionContainer">
                <div className="FeaturedCardDescription">
                <h4 className="FeaturedCardAbout">About the {featuredProduct.name}</h4>
                <h5 className="FeaturedCardCategory">{featuredProduct.category}</h5>
                    <p>{featuredProduct.description}</p>
                </div>
                <div className="FeaturedCardDetails">
                    <h4>Details</h4>
                    <p>Price: {featuredProduct.price} €</p>
                </div>

            </div>
        </div>
    )
}

export default FeaturedCard