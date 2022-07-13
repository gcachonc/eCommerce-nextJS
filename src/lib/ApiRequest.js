export const loadFeaturedProduct = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
    };
    const res = await fetch("https://technical-frontend-api.bokokode.com/api/products", requestOptions)
    const data = await res.json()
    const featuredProduct = data.data.data[0]

    return featuredProduct
}

export const loadProducts = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
    };
    const res = await fetch("https://technical-frontend-api.bokokode.com/api/products", requestOptions)
    const data = await res.json()
    const products = data.data.data

    return products
}

export const loadProductsFiltered = async (pageNumber, categories ) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const url = `https://technical-frontend-api.bokokode.com/api/products?page=${pageNumber}`
    var raw = ""
    if (categories.length >= 1){
        var raw = JSON.stringify({
        "sort": {
            "key": "price",
            "type": "ASC"
        },
        "categories": categories
        });
    }else {
        var raw = JSON.stringify({
            "sort": {
            "key": "price",
            "type": "ASC"
            }
        })
    }

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const res = await fetch(url, requestOptions)
    const data = await res.json()
    const products = data.data.data;

    return products;
}
