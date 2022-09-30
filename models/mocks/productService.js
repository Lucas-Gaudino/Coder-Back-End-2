import { faker } from "@faker-js/faker";
faker.locale = "es";

export const creteProduct = async () => {
    const product = {
        id: faker.datatype.uuid(),
    nombre: faker.commerce.product(),
    precio: faker.commerce.price(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    thumbnail: faker.image.imageUrl(),
    };
    return product;
};