import { useState, useEffect } from "react"
import { loadProducts, loadProductsFiltered } from "../../lib/ApiRequest"
import ProductCard from "../ProductCard/ProductCard"
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

const ProductListing = () => {
    const [filters, setFilters] = useState([])
    const [page, setPage] = useState(1)
    const [productList, setProductList] = useState([])

    const filtersEnum = ["people", "food", "landmarks", "pets", "premium", "cities", "nature"]

    function removeItemFromArr( arr, item ) {
        return arr.filter( function( e ) {
            return e !== item;
        } );
    };

    const handleOnChange = (filter) =>{
        setPage(1)
        if(filters.includes(filter)){
            const newfilterController = removeItemFromArr(filters, filter)
            filters = newfilterController
            console.log(newfilterController)
            loadProductsFiltered(page, newfilterController).then(result => setProductList(result))
        }
        else{
            filters.push(filter)
            loadProductsFiltered(page, filters).then(result => setProductList(result))
        }
        setFilters(filters)
    }

    const handleClick = (identifier) => {
        if(identifier === "prev" && page > 1){
            page = page - 1
            setPage(page)
            // loadProductsFiltered(page, filters).then(result => setProductList(result))
            console.log(page)
        }else if(identifier === "next"){
            page = page + 1
            setPage(page)
            // loadProductsFiltered(page, filters).then(result => setProductList(result))
            console.log(page)
        }
    }

    useEffect(() => {
        loadProductsFiltered(page, filters).then(result => setProductList(result))
    }, [setProductList, page])

    return(
        <section className="ProductListingContainer">
            <div className="FiltersContainer">
                {filtersEnum.map((filter, index ) => {
                    return (
                    <div className="CheckBoxFilter" key={filter}>
                        <p>{filter}</p>
                        <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={filter}
                        value={filter}
                        onChange={() => handleOnChange(filter)}
                    />
                    </div>
                )})
                }
            </div>
            <div className="ProductListContainer">
                {
                productList.map((product, index) => (
                    <ProductCard product={product} key={index}/>
                ))}
            </div>
            <div className="PaginationContainer">
                <button type="button" onClick={() => handleClick("prev")}>
                    <BiLeftArrow />Prev
                </button>
                <button type="button" onClick={() => handleClick("next")}>
                    Next<BiRightArrow />
                </button>
            </div>
        </section>
    )

}

export default ProductListing