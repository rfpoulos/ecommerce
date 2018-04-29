export let filterProductsByCategory = (categoryId, products) => 
    products.filter(product => product.categoryId === categoryId);

export let generateCartId = (() => {
    let currentId = 0;
    return () => {
        currentId+= 1;
        return currentId;
    }
})();

export let findProductByName = (productName, products, cart) => {
    let targetProduct = products.find(product => product.name === productName);
    let targetProductCopy = Object.assign({}, targetProduct);
    targetProductCopy.cartId = generateCartId(cart);
    return targetProductCopy;
}

export let findCategoryIdByName = (categoryName, categories) =>
    categories.find(category => categoryName === category.title).id;

export let findUserByUsername = (userName, users) => 
    users.find(user => userName === user.firstname + ' ' + user.lastname);