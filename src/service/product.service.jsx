export const getProducts = async () => {
    return await fetch("https://dummyjson.com/products", {
        method: "GET"
    }).then((res) => res.json())
}