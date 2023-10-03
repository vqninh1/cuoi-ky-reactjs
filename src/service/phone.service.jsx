export const getPhones = async () =>{
    return await fetch("https://dummyjson.com/products/category/smartphones",{
        method: 'GET'
    }).then((res) => res.json())
}

