const union = (...arr) => {
    const uni = arr.reduce((acc, curr) => {
        return acc.concat(
            curr.filter((el) => !acc.some((ele) => ele._id === el._id))
        );
    }, []);
    return uni;
};


const getCategoryProducts=(products, includeJackets, includeBags, includeShoes, includeSuitcase)=>{
    let newData = [];
    let flag = false;
    if (includeJackets) {
        flag = true;
        newData = union(newData, products.filter(item => item.category === "Jackets"));
    }
    if (includeBags) {
        flag = true;
        newData = union(newData, products.filter(item => item.category === "Backpacks"));
    }
    if (includeShoes) {
        flag = true;
        newData = union(newData, products.filter(item => item.category === "Shoes"));
    }
    if (includeSuitcase) {
        flag = true;
        newData = union(newData, products.filter(item => item.category === "Suitcases"));
    }
    if (flag)
        return newData;
    else
        return products;
}


    export { getCategoryProducts };
