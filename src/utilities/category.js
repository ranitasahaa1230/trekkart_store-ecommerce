const union = (...arr) => {
    const uni = arr.reduce((acc, curr) => {
        return acc.concat(
            curr.filter((el) => !acc.some((ele) => ele._id === el._id))
        );
    }, []);
    return uni;
};


const getCategoryProducts=(categories, includeJackets, includeBags, includeShoes, includeSuitcase)=>{
    let newData = [];
    let flag = false;
    if (includeJackets) {
        flag = true;
        newData = union(newData, categories.filter(item => item.category === "Jackets"));
    }
    if (includeBags) {
        flag = true;
        newData = union(newData, categories.filter(item => item.category === "Backpacks"));
    }
    if (includeShoes) {
        flag = true;
        newData = union(newData, categories.filter(item => item.category === "Shoes"));
    }
    if (includeSuitcase) {
        flag = true;
        newData = union(newData, categories.filter(item => item.category === "Suitcases"));
    }
    if (flag)
        return newData;
    else
        return categories;
}

const getBrandProducts=(brands, brandArnisa, brandGucci, brandCeline, brandBianyo,)=>{
    let newBrandData = [];
    let flag = false;
    if (brandArnisa) {
        flag = true;
        newBrandData = union(newBrandData, brands.filter(item => item.brand === "Arnisa"));
    }
    if (brandBianyo) {
        flag = true;
        newBrandData = union(newBrandData, brands.filter(item => item.brand === "Bianyo"));
    }
    if (brandCeline) {
        flag = true;
        newBrandData = union(newBrandData, brands.filter(item => item.brand === "Celine"));
    }
    if (brandGucci) {
        flag = true;
        newBrandData = union(newBrandData, brands.filter(item => item.brand === "Gucci"));
    }
    if (flag)
        return newBrandData;
    else
        return brands;
}

    export { getCategoryProducts,getBrandProducts };
