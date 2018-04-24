export let filterProductByCategory = (categoryId, products) => 
    products.filter(product => product.categoryId === categoryId);