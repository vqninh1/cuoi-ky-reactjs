export const getProductmore = () => {
    return  fetch("https://fakestoreapi.com/products", {
        method: "GET"
    }).then((res) => res.json())
}