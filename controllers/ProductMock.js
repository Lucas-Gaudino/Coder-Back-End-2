import { creteProduct } from '../models/mocks/productService.js';

let products = [];
//generar producto falso con faker
const mocksProducts = async () => {
    for (let i = 0; i < 5; i++) {
        const product = await creteProduct();
        products.push(product);
    }
};

export const getProducts = async () => {
    if (products.length === 0) {
        await mocksProducts();
    }
    //convertir products a json
    products = JSON.stringify(products);
    return products;
};


